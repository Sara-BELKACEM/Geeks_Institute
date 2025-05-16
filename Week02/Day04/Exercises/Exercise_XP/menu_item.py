import psycopg2

connection = psycopg2.connect(
    dbname="restaurant_menu_manager",
    user="postgres",
    password="SARABELKACEM879",
    host="localhost",  
    port="5432"
)

cursor = connection.cursor()

class MenuItem :
    def __init__(self, name, price):
        self.name = name 
        self.price = price

    def save(self):
       query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
       cursor.execute(query ,(self.name, self.price))
       connection.commit()
       print(f"Item {self.name} saved successfully")

    def delete(self):
        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query ,(self.name,))
        connection.commit()
        print(f"Menu item {self.name} has been deleted")

    def update(self, new_name, new_price):
        query = "UPDATE Menu_Items SET item_name = %s , item_price = %s WHERE item_name = %s"
        cursor.execute(query, (new_name, new_price, self.name))       
        connection.commit()
        self.name = new_name
        self.price = new_price
        print (f"{self.name} updated to '{new_name}' with price {new_price}.")



