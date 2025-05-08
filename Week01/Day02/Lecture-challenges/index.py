#Challenge 1:
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
print(sample_dict["class"]["student"]["marks"]["history"])



#Challenge 2:
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
del sample_dict["name"]
del sample_dict["salary"]
print(sample_dict)



#Challenge 3:
dct = {}
while True:
 key = input("Enter a key or 'quit':")
 if key.lower() == "quit":
    break
 value = input("Enter a value:")
 dct[key]= value
print(dct)




#Challenge 4:
def calculation(a, b):
    return a + b, a - b
res = calculation(40, 10)
print(res)


#Challenge 5:
def is_short(name):
    return len(name) <=4

def hello(name):
    return f"Hello {name}"

people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
short = filter(is_short, people)
greet = map(hello, short)

print(list(greet))