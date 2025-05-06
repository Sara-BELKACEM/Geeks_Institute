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
