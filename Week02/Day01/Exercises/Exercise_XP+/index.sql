CREATE TABLE students (
  id  SERIAL PRIMARY KEY,
  last_name VARCHAR(30),
  first_name VARCHAR(30),
  birth_date DATE
);

INSERT INTO students (id, last_name, first_name, birth_date) VALUES 
(1,'Abaayouss','Oussama','1999-01-01'),
(2,'Bounfil','Mouad','2001-01-01'),
(3,'Karroumi','Ibrahim','2000-01-01'),
(4,'Jad','Jad','2001-01-01'),
(5,'Loukibi','Hind','2000-01-01'),
(6,'Yasmine','Yasmine','2000-01-01'),
(7,'Belkacem','Sara','2005-11-28');

SELECT * FROM students 

SELECT first_name, last_name from students


SELECT first_name, last_name from students where id = 2;

SELECT first_name, last_name from students where last_name = 'Abaayouss' and first_name = 'Oussama';

SELECT first_name, last_name from students where last_name = 'Abaayouss' or first_name = 'Oussama';

SELECT first_name, last_name from students where  first_name LIKE '%a%';

SELECT first_name, last_name from students where  first_name LIKE 'a%';

SELECT first_name, last_name from students where  first_name LIKE '%a';

SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) = 'a'; --AI Help

SELECT first_name, last_name from students where  id = 1 or id = 3;

SELECT * FROM students WHERE birth_date >= '2000-01-01';