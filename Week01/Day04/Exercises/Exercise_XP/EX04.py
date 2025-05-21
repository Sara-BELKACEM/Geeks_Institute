#Exercice 4:
class Family:
  def __init__(self, last_name):
    self.members = []
    self.last_name = last_name

  def born(self, **kwargs):  
    self.members.append(kwargs)
    print(f"Congratulations to the {self.last_name} family. ")

  def is_18(self, family_member):
   for member in self.members:
      if member.get("name") == family_member:
        age = member.get("age", 0)
        if age >= 18:
           return True
        else :
           return False
      
      return False

  def family_presentation(self):
        print(f"The {self.last_name} family:")
        for member in self.members:
            print(
                f"Name: {member.get('name', 'Unknown')}, "
                f"Age: {member.get('age', 'Unknown')}, "
                f"Gender: {member.get('gender', 'Unknown')}, "
                f"Is Child: {member.get('is_child', 'Unknown')}"
            )


if __name__ == "__main__":
    my_family = Family("Taylor")

    my_family.members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
    ]

  
    my_family.born(name='Ethan', age=0, gender='Male', is_child=True)

    print("Is Michael over 18?", my_family.is_18('Michael')) 

my_family.family_presentation()            
