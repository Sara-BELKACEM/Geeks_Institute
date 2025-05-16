from menu_item import MenuItem
from menu_manager import MenuManager

def add_item_to_menu():
            name = input("Enter new item name: ")
            price = int(input("Enter item price: "))
            item = MenuItem(name, price)
            item.save()
            print("Item was added successfully")

def remove_item_from_menu():
            name = input("Enter item name to delete: ")
            item = MenuItem(name, 0)
            if item:
                item.delete()
                print("Item was deleted successfully")
            else:
                print("Item not found.")

def update_item_from_menu():
            name = input("Enter item name to update: ")
            item = MenuItem(name, 0)
            if item:
                new_name = input("Enter new name: ")
                new_price = int(input("Enter new price: "))
                item.update(new_name, new_price)
                print("Item was updated successfully")
            else:
                print("Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items() 
    if not items:
        print("The menu is currently empty.")
        return
    print("\n ---Restaurant Menu---")
    for item in items:
        print(f"- {item.name} : ${item.price}")

def show_user_menu():
    while True:    
        print("---Restaurant Menu Manager---")
        print("Choose an action:")
        print("[V] View an item")
        print("[A] Add an item")
        print("[D] Delete an item")
        print("[U] Update an item")
        print("[S] Show full menu")
        print("[Q] Quit")
        choice = input("Your choice: ").strip().upper()

        if choice == 'V':
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Found: {item.name} costs ${item.price}")
            else:
                print("Item not found.")

        elif choice == 'A':
             add_item_to_menu()
           

        elif choice == 'D':
             remove_item_from_menu()
         

        elif choice == 'U':
           update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'Q':
             print("\nFinal Restaurant Menu:")
             show_restaurant_menu()
             print("Exiting the program. Goodbye!")
             break

        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    show_user_menu()

