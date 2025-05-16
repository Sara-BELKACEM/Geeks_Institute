CREATE TABLE countries (
         country_id SERIAL PRIMARY KEY,
		 name VARCHAR(50),
		 capital VARCHAR(50),
		 flag VARCHAR(50),
		 subregion VARCHAR(50),
		 population BIGINT);