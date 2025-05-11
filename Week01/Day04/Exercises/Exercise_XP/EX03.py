#Exercise 3:
from EX02 import Dog
import random
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark()) 
        self.trained = True
    
    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{','.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll" , "stands on his back legs" , "shakes your hand" , "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")


        
