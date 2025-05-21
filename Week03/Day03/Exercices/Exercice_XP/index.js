//Exercise01:
function displayNumbersDivisible(divisor){
    let sum = 0;
    for(let i = 0 ; i <= 500 ; i++){
        if (i % divisor === 0 ){
            console.log(i)
            sum += i;
        }
    }
    console.log(sum)
}
displayNumbersDivisible(23);


//Exercice02:
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill(){
    let total = 0;
    for(let i = 0; i < shoppingList.length; i++){
        let item = shoppingList[i];
        if(item in stock && item in prices && stock[item] > 0 ){
            total += prices[shoppingList[i]]
            stock[item] -= 1;
    }
}
console.log(total)
console.log(stock)
}
myBill();


// Exercise03:
function changeEnough(itemPrice, amountOfChange){
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
    for(let i=0 ; i < amountOfChange.length ; i++){
        totalChange += amountOfChange[i] * coinValues[i];
    }
    return totalChange >= itemPrice;
}
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));



//Exercise04:
function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(city) {
    if (city.toLowerCase() === "london") {
        return 183;
    } else if (city.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(days) {
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95;
    }
    return cost;
}

function totalVacationCost() {
    let nights = Number(prompt("Enter the number of nights you would like to stay in the hotel:"));
    while (isNaN(nights) || nights <= 0) {
        nights = Number(prompt("Please enter a valid number of nights:"));
    }

    let city = prompt("Enter the city you are flying to:");
    while (!city || !isNaN(city)) {
        city = prompt("Please enter a valid city:");
    }

    let days = Number(prompt("Enter the number of days you would like to rent a car:"));
    while (isNaN(days) || days <= 0) {
        days = Number(prompt("Please enter a valid number of days:"));
    }

    let hotel = hotelCost(nights);
    let plane = planeRideCost(city);
    let car = rentalCarCost(days);
    let total = hotel + plane + car;

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total vacation cost: $${total}`);

    return total;
}
totalVacationCost();

