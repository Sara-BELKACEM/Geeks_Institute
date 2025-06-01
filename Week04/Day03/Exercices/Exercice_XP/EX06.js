//[2] === [2] // false
//{} === {}  // false


const object1 = { number: 5 };       // object1 → { number: 5 }
const object2 = object1;             // object2 → same as object1
const object3 = object2;             // object3 → same as object2 (and object1)
const object4 = { number: 5 };       // object4 → new 

object1.number = 4; // change number of object1 (and also object2 & object3)

console.log(object2.number);  // 4 
console.log(object3.number);  // 4
console.log(object4.number);  // 5


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;   
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
