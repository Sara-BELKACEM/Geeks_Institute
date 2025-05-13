SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

UPDATE customer 
SET first_name = 'Sara',
    last_name = 'Belkacem',
	email = 'Sarabelkacem@gmail.com'
WHERE customer_id = 3;	

UPDATE address 
SET address = 'Mohammedia'
WHERE address_id = 3;	
