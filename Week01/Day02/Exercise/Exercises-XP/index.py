#Exercise 1:
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
for item in zip(keys, values):
    print(item)

#Exercise 2:
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_price = 0
for name , age in family.items():
    if age < 3:
        cost = 0 
    elif age >= 3 and age < 12:
        cost = 10
    elif age >= 12 :
        cost = 15
    print(f"{name} : {cost}")
    total_price += cost
print(f"Total price: {total_price}")



#Exercise 3:
brand = {
    "name": "Zara",
    "creation_date": 1975, 
    "creator_name": "Amancio Ortega Gaona" ,
    "type_of_clothes": ['men', 'women', 'children', 'home'] ,
    "international_competitors": ['Gap', 'H&M', 'Benetton'] ,
    "number_stores": 7000 ,
    "major_color": {
            'France': 'blue', 
            'Spain': 'red', 
            "US":['pink', 'green']}
}
brand["number_stores"] = 2
print(f"Zara clients are: {brand['type_of_clothes']}")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
  brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"]) 
print(len(brand)) 
print(brand.keys())
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}
brand.update(more_on_zara)
print(brand)



#Exercise 4:
def describe_city(city, country="MOROCCO"):
    print(f"{city} is in {country}.")
describe_city("Mohammedia")



#Exercise 5:
import random
print("welcome to the game")
num = int(input("Guess a number between 1 and 100: "))
def number(num):
    if num < 1 or num > 100:
        num = int(input("Please enter a number between 1 and 100: "))
        number(num)
    else:    
        random_num = random.randint(1,100)
 
        if num == random_num:
            print("You guessed it right")
        else:
            print("You guessed it wrong")
            print(f"The number was {random_num} and your gess was {num}")

number(num)