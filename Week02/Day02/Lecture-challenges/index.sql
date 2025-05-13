SELECT avg(number_oscars) FROM actors;

SELECT DISTINCT number_oscars FROM actors;

SELECT * FROM actors WHERE birthday > '1970-01-01';

SELECT * FROM actors WHERE first_name in ('David','Morgan','Will');

CREATE TABLE movies(
 movie_id SERIAL,
 movie_title VARCHAR (50) NOT NULL,
 movie_story TEXT,
 actor_playing_id INTEGER,
 PRIMARY KEY (movie_id),
 FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
);

INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
    ( 'Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
    ( 'Oceans Eleven', 
    'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));


SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id;

CREATE TABLE producers(
 producer_id SERIAL PRIMARY KEY,
 producer_name VARCHAR (50) NOT NULL,
 movie_id INT,
 FOREIGN KEY (movie_id) REFERENCES  movies(movie_id)
);

INSERT INTO producers (producer_name, movie_id) 
VALUES ('SARA',1),
       ('NADA',2);

SELECT 
    movies.title AS movie_title,
    producers.producer_name
FROM 
    movies
INNER JOIN 
    producers
ON 
    movies.movie_id = producers.movie_id;


SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id;

SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
LEFT OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;

SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
RIGHT OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;

SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
FULL OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;

CREATE TABLE countries (
     country_id SERIAL PRIMARY KEY,
	 country_name VARCHAR (50) NOT NULL
);

SELECT countries.country_id,
       countries.country_name,
       actors.first_name,
       actors.last_name
FROM 
    countries
INNER JOIN 
    actors
ON 
    countries.country_id = actors.actor_id;


SELECT 
    countries.country_id,
    countries.country_name,
    actors.first_name,
    actors.last_name
FROM 
    countries
LEFT OUTER JOIN 
    actors
ON 
    countries.country_id = actors.actor_id;

SELECT 
    countries.country_id,
    countries.country_name,
    actors.first_name,
    actors.last_name
FROM 
    countries
RIGHT OUTER JOIN 
    actors
ON 
    countries.country_id = actors.actor_id;


SELECT 
    countries.country_id,
    countries.country_name,
    actors.first_name,
    actors.last_name
FROM 
    countries
FULL OUTER JOIN 
    actors
ON 
    countries.country_id = actors.actor_id;	