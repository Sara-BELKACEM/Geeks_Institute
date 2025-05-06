# Exercise01
hello = "Hello world "
print(hello*4)


# Exercise02
print((99**3)*8)


# Exercise03
name = input("Enter your name: ")
my_name = "Sara"
if name == my_name:
    print("Hello Sara!")
else:
    print("Hello stranger!")    


# Exercise04
height = int(input("Enter your height in cm: "))
if height >= 145:
    print("You are tall enough to ride the rollercoaster!")
else:
    print("You need to grow some more to ride.")


# Exercise05
my_fav_numbers = {1, 3, 5, 8}
my_fav_numbers.add(7)
my_fav_numbers.add(2)
my_fav_numbers.remove(8)
print(my_fav_numbers)
friend_fav_numbers = {4, 6, 9}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# Exercise06
# Tuples are immutable lists, which means items can’t be changed.


# Exercise07
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)


# Exercise08
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
                    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
                    "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

sandwich = input("What sandwich would you like?")

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    sandwich_orders.remove(sandwich)
    print(f"I made your {sandwich}")