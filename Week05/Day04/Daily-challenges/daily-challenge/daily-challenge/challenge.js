const greet = require('./greeting');                  
const displayColorfulMessage = require('./colorful-message'); 
const readAndDisplayFile = require('./read-file');   

const message = greet('Sara'); 
console.log(message);

displayColorfulMessage();
readAndDisplayFile();
