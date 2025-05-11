#Exercise 1:
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
Cat1 = Cat("Tom",5)
Cat2 = Cat("Sky",3)
Cat3 = Cat("Milo",2)
# oldest = max([Cat1,Cat2,Cat3], key=lambda x: x.age)
def oldest_cat(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest
cats = [Cat1, Cat2, Cat3]
oldest = oldest_cat(cats)

print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")




#Exercise 2:
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x}cm hight!")   

davids_dog = Dog("Rex", 50)
print(davids_dog.name , davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog.name , sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is the bigger dog")
else:
    print(f"{sarahs_dog.name} is the bigger dog")    




#Exercise 3:
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
            for element in self.lyrics:
                print(element)
stairway= Song(["There’s a lady who's sure","all that glitters is gold"
               , "and she’s buying a stairway to heaven"])                
stairway.sing_me_a_song()



#Exercise 4:
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo .")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animal(self): 
        print(f"Animals in {self.name}:")
        for animal in self.animals:
         print(animal) 

    def sell_animal(self, animal_sold):
            if animal_sold in self.animals:
                self.animals.remove(animal_sold)
                print(f"{animal_sold} has been sold.")
            else:
                print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):#Help with AI
        self.animals.sort()
        grouped = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            grouped.setdefault(first_letter, []).append(animal)
        formatted = {
            k: v[0] if len(v) == 1 else v
            for k, v in grouped.items()
        }

        print("Animals sorted and grouped:")
        for letter, names in formatted.items():
            print(f"{letter}: {names}")

        self.grouped_animals = formatted     
        
    def get_groups(self):#Help with AI
        print("Animal groups:")
        if hasattr(self, 'grouped_animals'):
            for group, names in self.grouped_animals.items():
                print(f"{group} : {names}")
        else :
            print("Please run sort_animals()first.")        
           
new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Tiger")     
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Monkey")
new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Lion")  #duplicate

new_york_zoo.get_animal()
new_york_zoo.sell_animal("Lion")
new_york_zoo.sell_animal("Tiger")
new_york_zoo.get_animal()
new_york_zoo.sort_animals()
new_york_zoo.get_groups()