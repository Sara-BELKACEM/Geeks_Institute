from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

def get_connection():
    return psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="SARABELKACEM879",
        host="localhost",
        port="5432"
    )

@app.route('/')
def home():
    return "Restaurant Menu API is working"

@app.route('/items', methods=['GET'])
def get_items():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT item_name, item_price FROM Menu_Items")
    items = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(items)

@app.route('/add', methods=['POST'])
def add_item():
    data = request.json
    name = data.get('name')
    price = data.get('price')

    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
    conn.commit()
    cur.close()
    conn.close()

    return f"Item '{name}' added successfully!"

@app.route('/delete/<name>', methods=['DELETE'])
def delete_item(name):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (name,))
    conn.commit()
    cur.close()
    conn.close()

    return f"Item '{name}' deleted successfully!"

@app.route('/update/<name>', methods=['PUT'])
def update_item(name):
    data = request.json
    new_name = data.get('name')
    new_price = data.get('price')

    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                (new_name, new_price, name))
    conn.commit()
    cur.close()
    conn.close()

    return f"Item '{name}' updated to '{new_name}' with price {new_price}"

if __name__ == "__main__":
    app.run(debug=True)

