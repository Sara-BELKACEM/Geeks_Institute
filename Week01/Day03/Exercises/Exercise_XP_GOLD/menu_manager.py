#Exercice 3:
class MenuManager:
    def __init__(self, menu):
        self = menu [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten": True}
        ] 
    
    def add_item(self, name, price, spice, gluten):
        self.menu.append({"name": name ,"price": price, "spice level": spice, "gluten": gluten})
        print(f"Added {name} to the menu.")
    
    def update_item(self, name, price, spice, gluten):
        for item in self.menu:
            if item["name"] == name:
                item["price"] = price
                item["spice level"] = spice
                item["gluten"] = gluten
                print(f"{name} has been updated.")
                return 
        print(f"{name} is not in the menu.")    
                
    def remove_item(self, name):  
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                print(f"{name} has been removed.")
                print("Updated menu:")
                for dish in self.menu:
                    print(dish)
                return
        print(f"{name} is not in the menu.")          
       
        