// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// Create a new array combining strings and spreading the vegetables and fruits arrays
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]


// ------2------
// Its a string
const country = "USA";

// Spread the string into an array of characters
console.log([...country]);
// Output: ["U", "S", "A"]


// ------Bonus------ (AI)
// Create an array with two empty slots using array literal with commas
let newArray = [...[,,]];

// Log the new array with empty slots
console.log(newArray);
// Output: [empty × 2]
// This means the array has two empty slots (holes), not actual undefined values.
