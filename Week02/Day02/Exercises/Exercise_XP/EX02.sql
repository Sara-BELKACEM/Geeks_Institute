SELECT * FROM customer;

SELECT first_name, last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC ;

SELECT address, phone FROM address WHERE district = 'Texas' ;

SELECT * FROM film WHERE film_id in (15, 150);

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Matrix Snowman' ;

SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Ma%' ;

SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10;

SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10 OFFSET 10;
SELECT * FROM film ORDER BY replacement_cost ASC OFFSET 10 FETCH NEXT 10 ROWS ONLY;

SELECT payment.amount,
       payment.payment_date,
       customer.first_name,
       customer.last_name
FROM 
    customer
INNER JOIN 
    payment
ON 
    customer.customer_id = payment.customer_id;


select * from inventory;
select * from film where film_id not in (select film_id from inventory);

select city.city, country.country 
from city city 
join country country on city.country_id = country.country_id


select customer.customer_id,
       customer.first_name,
	   customer.last_name,
	   payment.amount,
	   payment.payment_date, 
	   payment.staff_id
from payment payment 
join customer customer on payment.customer_id = customer.customer_id
order by payment.staff_id;
