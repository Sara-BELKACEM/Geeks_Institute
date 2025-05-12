SELECT COUNT(*) AS actor_count FROM actors;
INSERT INTO actors (first_name) VALUES ('Marwa') --ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
                                                 --Failing row contains (27, Marwa, null, null, null). 