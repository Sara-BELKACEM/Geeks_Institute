UPDATE film SET language_id = 3 WHERE title = 'Academy Dinosaur'

--Foreign keys in customer: store_id → store(store_id)
--                          address_id → address(address_id)

--Impact on INSERT:
--You must insert the related store and address first.
--Foreign key constraints ensure the customer is tied to valid store and address records, maintaining relational integrity.

DROP TABLE customer_review;-- no extra checking

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- AI Help:
SELECT film.title, film.rental_rate
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.description LIKE '%sumo wrestler%' 
  AND actor.first_name = 'Penelope' 
  AND actor.last_name = 'Monroe';

SELECT film.title
FROM film
WHERE film.rating = 'R'
  AND film.length < 60
  AND film.description LIKE '%documentary%';

--AI Help:
SELECT film.title
FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND payment.amount > 4.00
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT film.title, film.rental_rate
FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND (film.title LIKE '%boat%' OR film.description LIKE '%boat%')
  AND film.rental_rate > 5.00; 