#Exercise 1:
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
print(dict(zip(keys,values)))

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

#bonus:
family = {}
while True :
      name = input("Enter a name or 'done' to exit: ")
      if name.lower()  == 'done'  :
           break 
      
      age = int(input("Enter a age: "))
      family[name] = age 

price = 0
for name , age in family.items() :
    if age < 3 :
         cost =0
    elif age >= 3 and age < 12 :
         cost = 10
    elif age >= 12 :
         cost = 15
    print(f"{name} : {cost}")
    price += cost
print(f"Total cost: {price}")



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



#Exercice 6:
def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt("M", "Coding vibes")

def make_shirt(size="L", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt()

make_shirt("M")

make_shirt("S","Geeks for Geeks")

make_shirt(size = "XS", text = "Geeks institute")



#Exercise 7:
import random
def get_random_temp():
    return random.randint(-10,40)
print(f" {get_random_temp()}")    

def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.") 
    if temp < 0 :
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp > 0 and temp < 16 :
        print("Quite chilly! Don’t forget your coat")
    elif temp >= 16 and temp < 23 :
        print("Perfect weather! Enjoy the sunshine")
    elif temp >= 23 and temp < 32 :
        print("Warm and sunny! Don’t forget your sunscreen ")
    elif temp >= 32 and temp <= 40 :
        print("Hot and sunny! Stay hydrated today")

def get_random_temp(season):
    if season.lower() == "winter" :
        return random.randint(-10,15)
    elif season.lower() == "spring" :
        return random.randint(16,20)
    elif season.lower() == "summer":
        return random.randint(25,35)
    elif season.lower() == "autumn":
        return random.randint(5,20)
    else :
        return "Invalid season"
    
def main():
    season = input("Enter a season (spring, summer, autumn, winter): ") 
    print(get_random_temp(season))   
main()

def main():
    month = input("Enter a number for the month (1 -12): ")
    if month in ["1","2","3"] :
        print("Winter")
    elif month in ["4","5","6"] :
        print("Spring")
    elif month in ["7","8","9"] :
        print("Summer")
    elif month in ["10","11","12"] :
        print("Autumn")
main()                


#Exercice 8:
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

list_wa = []
incor = 0
cor = 0
def asks(data):
    global list_wa, incor, cor
    for i in range(len(data)):
        print(f"Question {i+1}: {data[i]['question']}")
        answer = input("Answer:")
        if answer.lower() == data[i]['answer'].lower:
            print("Correct!")
            incor += 1
        else:
            print(f"Incorrect. The correct answer is {data[i]['answer']}")
            list_wa.append(
                {
                    "question": data[i]['question'],
                    "answer" : answer,
                    "correct": data[i]['answer']

                }
            )
            cor += 1

def informs():
    print(f"Correct answers: {cor}")
    print(f"Incorrect answers: {incor}")
    if incor > 3 :
        print("You got more than 3 wrong answers. Try playing again!")
    else :
        print("You got less than 3 wrong answers. Well done!")
    if list_wa :
        print("Here are your incorrect answers: ")
        for i in list_wa:
            print(f"Question: {i['quenstion']}")
            print(f"Your answer: {i['answer']}")
            print(f"Correct answer: {i['correct']}")

asks(data)
informs()
