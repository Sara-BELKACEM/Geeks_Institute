# Exercise01:
month = int(input("Enter month number (1-12): "))
if month >= 3 and month <= 5 :
    print("Spring")
elif month >= 6 and month <= 8 :
    print("Summer")
elif month >= 9 and month <=11 : 
    print("Autumn")
elif month == 12 or month == 1 or month == 2 :
    print("Winter")
else:
    print("Invalid month number")



# Exercise02:
for i in range(0,20):
    i += 1
    print(i) 



# Exercise03:
my_name = "Sara"
name = input("Enter your name: ")
while name != my_name:
    name = input("Enter your name: ")
print("Welcome, Sara!")
    



# Exercise04:    
name = input("Enter your name: ")
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
if name in names:
    print(names.index(name))
else:
    print("Name not found in the list")   



# Exercise05:
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))
if max(num1, num2, num3) == num1 :
    print("The greater number is:", num1)
elif (max(num1, num2, num3) == num2) :
    print("The greater number is:", num2)
else:
    print("The greater number is:", num3)        



# Exercise06:(With AI help)
import random

wins = 0
losses = 0

while True:
    user_input = input("Guess a number from 1 to 9 (or type 'quit' to exit): ")

    if user_input.lower() == 'quit':
        break

    if not user_input.isdigit():
        print("Please enter a valid number.")
        continue

    user_guess = int(user_input)

    if user_guess < 1 or user_guess > 9:
        print("Number must be between 1 and 9.")
        continue

    random_number = random.randint(1, 9)

    if user_guess == random_number:
        print("Winner!")
        wins += 1
    else:
        print(f"Better luck next time. The correct number was {random_number}.")
        losses += 1

print("\nGame Over!")
print("Total games won:", wins)
print("Total games lost:", losses)
