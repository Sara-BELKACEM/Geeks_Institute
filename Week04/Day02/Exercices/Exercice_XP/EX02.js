const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach(function(color, index) {
let number = index + 1;

let suffix = 
    (number === 1) ? ordinal[1] :      
    (number === 2) ? ordinal[2] :      
    (number === 3) ? ordinal[3] :      
    ordinal[0];                        

console.log(number + suffix + " choice is " + color + ".");
});