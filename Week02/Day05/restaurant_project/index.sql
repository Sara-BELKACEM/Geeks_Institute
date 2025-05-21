CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(10) CHECK (role IN ('admin', 'client')) NOT NULL
);

CREATE TABLE Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price NUMERIC(6,2) DEFAULT 0.00
);
