// Function Declaration
function weight(value) {
  return value * 1000;
}
console.log(weight(2)); // 2000

// Function Expression
const weight = function(value) {
  return value * 1000;
};
console.log(weight(3)); // 3000

// Arrow Function (one-liner)
const weight = value => value * 1000;
console.log(weight(4)); // 4000


