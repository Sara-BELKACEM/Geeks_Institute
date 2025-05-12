select * from actors ORDER BY last_name DESC limit 4

select * from actors where first_name like '%e%';

select * from actors where number_oscars >= 5 ;

UPDATE actors set first_name = 'Maty' where last_name = 'Damon' 
returning  actor_id,first_name, last_name,age, number_oscars;
UPDATE actors set number_oscars = '4' where last_name = 'Clooney' and first_name = 'George' 
returning   actor_id,first_name, last_name,age,number_oscars;

alter table actors rename column age to birthday

delete from actors where first_name = 'safae'
returning actor_id,first_name, last_name,birthday,number_oscars;