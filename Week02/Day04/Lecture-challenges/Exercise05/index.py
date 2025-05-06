num = int(input("Enter a number between 1 and 100:"))
if num % 3 == 0:
    print("Fizz")
elif num % 5 == 0:
    print("Buzz")    
elif num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")    