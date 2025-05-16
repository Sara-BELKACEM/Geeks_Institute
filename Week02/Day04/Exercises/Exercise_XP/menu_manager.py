import psycopg2
from menu_item import MenuItem

connection = psycopg2.connect(
    dbname="restaurant_menu_manager",
    user="postgres",
    password="SARABELKACEM879",
    host="localhost",  
    port="5432"
)

cursor = connection.cursor()

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (name,))
        result = cursor.fetchone()
        if result :
            item_name, item_price = result
            return MenuItem(item_name, item_price)
        else :
            return None 

    @classmethod
    def all_items(cls):
        query = "SELECT item_name, item_price FROM Menu_Items"
        cursor.execute(query)
        results = cursor.fetchall()
        return [MenuItem(name, price) for name, price in results]
    
