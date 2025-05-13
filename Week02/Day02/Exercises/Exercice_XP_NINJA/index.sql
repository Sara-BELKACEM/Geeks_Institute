SELECT first_name, last_name FROM customer ORDER BY first_name DESC LIMIT 2;

--AI Help
DELETE FROM payment
WHERE customer_id IN (
    SELECT customer_id FROM customer WHERE first_name = 'Scott'
);

SELECT * FROM payment
WHERE customer_id IN (
    SELECT customer_id FROM customer WHERE first_name = 'Scott'
);


SELECT 
  payment.amount,
  payment.payment_date,
  CASE 
    WHEN customer.first_name = 'Scott' THEN '' 
    ELSE customer.first_name 
  END AS first_name,
  CASE 
    WHEN customer.last_name = 'Scott' THEN '' 
    ELSE customer.last_name 
  END AS last_name
FROM payment
LEFT JOIN customer ON payment.customer_id = customer.customer_id;


SELECT 
  payment.amount,
  payment.payment_date,
  customer.first_name,
  customer.last_name
FROM payment
INNER JOIN customer ON payment.customer_id = customer.customer_id
WHERE customer.first_name <> 'Scott';