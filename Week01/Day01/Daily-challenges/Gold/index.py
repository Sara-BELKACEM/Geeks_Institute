date = input("Enter the date DD/MM/YYYY: ")
day, month, year = date.split("/")
year = int(year)

curant_year = 2025

age = curant_year -year

last_digit = age % 10

candles = "i" * last_digit

print()
print("     ____"+candles+"____")
print("     |:H:a:p:p:y:|")
print("   __|___________|__")
print("  |^^^^^^^^^^^^^^^^^|")
print("  |:B:i:r:t:h:d:a:y:|")
print("  |                 |")
print("  ~~~~~~~~~~~~~~~~~~~")