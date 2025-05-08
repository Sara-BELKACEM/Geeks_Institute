#Exercise 1:
class Circle:
    def __init__(self,radius):
        self.radius = radius

    def perimeter(self):
        return 2 * 3.14 * self.radius
        
    def area(self):
         return 3.14 * self.radius * self.radius
    
    def __str__(self):
        return f"Circle with radius {self.radius} has perimeter {self.perimeter()} and area {self.area()}"



#Exercice 2:
import random
class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reverse(self):
        return self.letters[::-1]    
    
    def sort(self):
        return sorted(self.letters)
    
    def generate_random_list(self):#AI help
        return [random.randint(1, 100) for _ in self.letters]
    
my_list = MyList(["a", "b", "c", "d"])    

print(my_list.reverse())
print(my_list.sort())  
print(my_list.generate_random_list()) 
