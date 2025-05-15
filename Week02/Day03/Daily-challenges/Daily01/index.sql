CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES Customer(id)
);


INSERT INTO Customer (first_name, last_name)
VALUES ('John', 'Doe'),
       ('Jerome', 'Lalu'),
       ('Lea', 'Rive');


INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (true,(SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'));

--default false
INSERT INTO Customer_Profile (customer_id)
VALUES ((SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));


SELECT Customer.first_name
FROM Customer 
JOIN Customer_profile  ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isLoggedIn = true;	   

SELECT Customer.first_name, Customer_profile.isLoggedIn
FROM Customer 
LEFT JOIN Customer_profile  ON Customer.id = Customer_profile.customer_id;

SELECT COUNT(*) 
FROM Customer 
JOIN Customer_profile  ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isLoggedIn = false OR Customer_profile.isLoggedIn IS NULL;

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL
);

INSERT INTO Book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');


CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL UNIQUE,
    student_age INT CHECK (age <= 15));

INSERT INTO Student (student_name, student_age)
VALUES ('John', 12),
       ('Lera', 11),
       ('Patrick', 10),
       ('Bob', 14);	

CREATE TABLE Library (
    book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id, borrowed_date));
	

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM Student WHERE student_name = 'John'),'2022-02-15');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
        (SELECT student_id FROM Student WHERE student_name = 'Bob'),'2021-03-03');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM Student WHERE student_name = 'Lera'),'2021-05-23');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
        (SELECT student_id FROM Student WHERE student_name = 'Bob'),'2021-08-12');


SELECT Student.student_name, Book.title
FROM Library 
JOIN Student  ON Library.student_fk_id = Student.student_id
JOIN Book  ON Library.book_fk_id = Book.book_id;	

SELECT AVG(Student.student_age) 
FROM Library 
JOIN Student  ON Library.student_fk_id = Student.student_id
JOIN Book  ON Library.book_fk_id = Book.book_id
WHERE Book.title = 'Alice In Wonderland';

DELETE FROM Student WHERE student_name = 'Bob';
