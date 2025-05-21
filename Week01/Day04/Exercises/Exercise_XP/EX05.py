#Exercise 05: AI help:
from EX04 import Family 

class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if self.is_18(name):
                    print(f"{member['incredible_name']} uses power: {member['power']}")
                else:
                    print(f"{name} is not over 18 and cannot use their power.")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("\n*Here is our powerful family*")
        super().family_presentation()
        for member in self.members:
            print(f"Incredible Name: {member.get('incredible_name')}, Power: {member.get('power')}")


if __name__ == "__main__":
    family = TheIncredibles("Incredibles")
    family.members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
        'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]

    family.incredible_presentation()

    family.born(name='Baby Jack', age=1, gender='Male', is_child=True,
                power='Unknown Power', incredible_name='BabyJack')

    family.incredible_presentation()

    print("\nUsing powers:")
    family.use_power("Michael")
    family.use_power("Baby Jack")
