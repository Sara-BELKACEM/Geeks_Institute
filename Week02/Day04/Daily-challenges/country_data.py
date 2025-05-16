#MADE WITH AI :


import requests
import psycopg2

# Fetch 10 random countries from the API
response = requests.get("https://restcountries.com/v3.1/all")
countries = response.json()[:10]

# Connect to PostgreSQL and insert countries into the database
try:
    connection = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="SARABELKACEM879",
        host="localhost",
        port="5432"
    )
    cursor = connection.cursor()

    # Insert countries into the database
    for country in countries:
        name = country.get('name', {}).get('common', '')
        capital = country.get('capital', ['N/A'])[0]
        flag = country.get('flags', {}).get('png', '')
        subregion = country.get('subregion', 'N/A')
        population = country.get('population', 0)

        cursor.execute("""
            INSERT INTO Countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """, (name, capital, flag, subregion, population))

    connection.commit()

    # Fetch and print the countries just inserted
    cursor.execute("SELECT name, capital, flag, subregion, population FROM Countries")
    rows = cursor.fetchall()

    print("\n--- Countries in the Database ---")
    for row in rows:
        print(f"Name: {row[0]}, Capital: {row[1]}, Flag: {row[2]}, Subregion: {row[3]}, Population: {row[4]}")

    cursor.close()
    connection.close()

    print("\n10 random countries have been added to the database!")

except Exception as e:
    print(f"An error occurred: {e}")

