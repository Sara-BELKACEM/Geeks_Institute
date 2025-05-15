SELECT * FROM language;

SELECT film.title, film.description, language.name 
FROM film
INNER JOIN language
ON film.language_id = language.language_id; 

SELECT language.name, MAX(film.title), MAX(film.description) 
FROM language
LEFT JOIN film 
ON film.language_id = language.language_id
GROUP BY language.name
ORDER BY language.name;

CREATE TABLE new_film (
   id SERIAL,
   name VARCHAR(50),
   PRIMARY KEY (id)
);

INSERT INTO new_film (id, name) 
VALUES (1,'Predestination'),
       (2,'Note Book');

CREATE TABLE customer_review (
        review_id SERIAL,
		film_id INT NOT NULL,
		language_id INT NOT NULL ,
		title VARCHAR(50),
		score INT CHECK(score BETWEEN 1 AND 10),
		review_text TEXT,
		last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP, --AI help 
		PRIMARY KEY (review_id),
		FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
		FOREIGN KEY (language_id) REFERENCES language(language_id)
);

INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update )
VALUES (1,1,'Mind-Bending Sci-Fi',8,'A thought-provoking time travel thriller with unexpected twists.',CURRENT_TIMESTAMP),
       (2,1,'Heartfelt Romance',9,'A beautiful, emotional love story that tugs at your heartstrings.',CURRENT_TIMESTAMP);

	   DELETE FROM new_film WHERE name = 'Predestination';