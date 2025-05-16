import psycopg2

class MenuManager:
    @staticmethod
    def get_all_items():
        connection = psycopg2.connect(
            dbname="postgres",
            user="postgres",
            password="SARABELKACEM879",
            host="localhost",
            port="5432"
        )
        cursor = connection.cursor()
        cursor.execute('SELECT item_id, item_name, item_price FROM Menu_Items')
        items = cursor.fetchall()
        cursor.close()
        connection.close()
        return items
