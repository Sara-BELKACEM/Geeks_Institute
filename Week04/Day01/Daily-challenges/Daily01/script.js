let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};
displayGroceries();

const cloneGroceries = () => {
    let user = client; 
    client = "Betty"; 
    console.log("user:", user);   // John hit user copy dl client
    console.log("client:", client); // Betty hit tbdl
    
    let shopping = groceries; 
    groceries.totalPrice = "35$"; 
    groceries.other.paid = false; 
    console.log("shopping.totalPrice:", shopping.totalPrice);
    console.log("shopping.other.paid:", shopping.other.paid);
};
cloneGroceries();
