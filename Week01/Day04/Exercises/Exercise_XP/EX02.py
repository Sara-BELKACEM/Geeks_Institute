#Exercice 2:
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / 10 * self.age 
    
    def fight(self, dogs):
        winner = dogs[0]

        for dog in dogs[1:]:
            self_power = self.run_speed() * self.weight
            dogs_power = dog.run_speed() * dog.weight

            if dogs_power > self_power:
                winner = dog

        return f"{winner.name} wins the fight!"

dog1 = Dog("Buddy", 3, 20)
dog2 = Dog("Max", 5, 25)
dog3 = Dog("Rex", 4, 22)      

all_dogs = [dog1, dog2, dog3]

print(dog1.fight(all_dogs))
