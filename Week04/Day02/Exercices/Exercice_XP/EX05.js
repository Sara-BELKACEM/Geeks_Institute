const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicPhrase = epic.reduce(function(accumulator, currentValue) {
  return accumulator + " " + currentValue;
});
console.log(epicPhrase);


//more simple 
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// const sentence = epic.reduce((a, b) => a + " " + b);
// console.log(sentence);

