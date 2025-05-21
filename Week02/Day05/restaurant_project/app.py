from flask import Flask, request, jsonify
import psycopg2, bcrypt, jwt, datetime
from functools import wraps
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# App config
app = Flask(__name__)
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")
DB_NAME = os.getenv("DB_NAME", "postgres")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "yourpassword")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")

# Connect to PostgreSQL
def get_connection():
    return psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )

# Token generation
def generate_token(user_id, role):
    payload = {
        'user_id': user_id,
        'role': role,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')

# Token verification
def token_required(role_required=None):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = request.headers.get('Authorization')
            if not token:
                return jsonify({'error': 'Token is missing'}), 403
            try:
                decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
                if role_required and decoded['role'] != role_required:
                    return jsonify({'error': 'Unauthorized'}), 403
                request.user = decoded
            except jwt.ExpiredSignatureError:
                return jsonify({'error': 'Token expired'}), 401
            except jwt.InvalidTokenError:
                return jsonify({'error': 'Invalid token'}), 401
            return f(*args, **kwargs)
        return wrapper
    return decorator

# Root route
@app.route('/')
def home():
    return "Restaurant Menu API is running!"

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    fname = data['first_name']
    lname = data['last_name']
    email = data['email']
    password = data['password']
    role = data['role']

    hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO Users (first_name, last_name, email, password, role) VALUES (%s, %s, %s, %s, %s)",
                    (fname, lname, email, hashed_pw.decode('utf-8'), role))
        conn.commit()
        return jsonify({'message': 'User registered successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    finally:
        cur.close()
        conn.close()

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT user_id, password, role FROM Users WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user and bcrypt.checkpw(password.encode('utf-8'), user[1].encode('utf-8')):
        token = generate_token(user[0], user[2])
        return jsonify({'token': token})
    else:
        return jsonify({'error': 'Invalid email or password'}), 401

# View menu (any user)
@app.route('/items', methods=['GET'])
@token_required()
def get_items():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items")
    items = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify([
        {"id": row[0], "name": row[1], "price": float(row[2])} for row in items
    ])

# Add item (admin only)
@app.route('/items', methods=['POST'])
@token_required(role_required='admin')
def add_item():
    data = request.json
    name = data['name']
    price = data['price']
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': f"Item '{name}' added successfully"})

# Update item (admin only)
@app.route('/items/<string:name>', methods=['PUT'])
@token_required(role_required='admin')
def update_item(name):
    data = request.json
    new_name = data['name']
    new_price = data['price']
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                (new_name, new_price, name))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': f"Item '{name}' updated"})

# Delete item (admin only)
@app.route('/items/<string:name>', methods=['DELETE'])
@token_required(role_required='admin')
def delete_item(name):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (name,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': f"Item '{name}' deleted"})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
