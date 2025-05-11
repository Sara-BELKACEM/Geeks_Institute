#Exercice 1:
birthday = {
    "Sara" : "2005/11/28",
    "Khaoula" : "2004/06/06",
    "Marayam" : "1998/02/20",
    "Safae" : "1996/06/01",
    "Ibrahim" : "2000/01/01",
    "Mohammed" : "2026/01/01"
}
print("Welcome to the birthday dictionary.")
print("You can look up the birthdays of the people in the list!")
person = input("Enter a name: ")
person_birthday = input("Enter a birthday YYYY/MM/DD: ")
print(f"{person}'s birthday is {person_birthday}")



#Exercice 2:
birthday = {
    "Sara" : "2005/11/28",
    "Khaoula" : "2004/06/06",
    "Marayam" : "1998/02/20",
    "Safae" : "1996/06/01",
    "Ibrahim" : "2000/01/01",
    "Mohammed" : "2026/01/01"
}
print("Welcome to the birthday dictionary." )
print(birthday)
name = input("Enter the person name:" )
if name in birthday:
    print(f"{name} birthday is {birthday[name]}")
else:
    print("Sorry, we don't have the birthday information for {name}")    
    


#Exercice 3:
def calc(x):
    str_x = str(x)
    total = int(str_x) + int(str_x*2) + int(str_x*3) + int(str_x*4)
    return total
print(calc(3))


#Exercice 4:
import random
def throw_dice():
    return random.randint(1,6)

def throw_until_doubles():
    count = 0
    while True:
      die1 = throw_dice()
      die2 = throw_dice()
      count += 1
      if die1 == die2 :
          return count     

def main():#AI help:
    results = []
    for _ in range(100):
        rolls = throw_until_doubles()
        results.append(rolls)
    
    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {round(average_throws, 2)}")

if __name__ == "__main__":
    main()
 
