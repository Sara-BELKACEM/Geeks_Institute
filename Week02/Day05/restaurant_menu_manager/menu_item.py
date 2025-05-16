import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        connection = psycopg2.connect(
            dbname="postgres",
            user="postgres",
            password="SARABELKACEM879",
            host="localhost",
            port="5432"
        )
        cursor = connection.cursor()
        cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", 
                       (self.name, self.price))
        connection.commit()
        cursor.close()
        connection.close()
