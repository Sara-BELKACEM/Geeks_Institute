//Exercice01:

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();  
people[2] = "Jason";
people.push("Sara");
console.log(people.indexOf("Mary"));
console.log(people.slice(1, 3));
console.log(people.indexOf("Foo")); //return -1 cause not defined
var last = people[people.length - 1];
console.log(last);

for (i = 0 ; i < people.length ; i++) {
    console.log(people[i]);
}

for (i = 0 ; i < people.length ; i++) {
    console.log(people[i]);
    if (people[i] === "Devon")
        break;
}

//Exercice02:
let colors = ["White","Black","Blue","Green","Red"];
let suffix = ["st","nd","rd","th","th"];
for (i = 0 ; i < colors.length ; i++) {
    suff = suffix[i] || "th"; 
    console.log(`My ${i + 1}${suff} choice is ${colors[i]}`);
}

//Exercise03:
let number = Number(prompt("Enter a number: "));
while ( typeof number !== 'number'){
    number = Number(prompt("Please enter a number: "));
}
while (number < 10){
    number = Number(prompt("Enter a new number:"));
}


//Exercice04:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor)
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])
sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] 
danRent = building.numberOfRoomsAndRent.dan[1]
if (sum > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

//Exercise05:
const family = {
    father : "Rachid",
    mother : "Samira",
    daughter : "Sara"
}
for (let key in family){
    console.log(key);
}
for (let value in family){
    console.log(family[value]);
}


//Exercise06:
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
sentence = ''
for (key in details){
    sentence += `${key} ${details[key]} `
}
console.log(sentence);

//Exercise07:
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let societyName = '';
for(i=0 ; i < names.length ; i++){
    societyName += names[i][0];
}
console.log(societyName.split('').sort().join(''));