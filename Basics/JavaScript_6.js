// Numbers and math
const score = 200;
const newScore = new Number(400); // Maybe you can prefer this

console.log(score);
console.log(newScore);
// Some useful Methods

console.log(score.toString());
console.log(typeof score.toString()); // will be a string

console.log(score.toFixed(2)); // double as .2f in C

const num = 19.876;
console.log(num.toPrecision(3)); // precision to given number

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN')); // Converts to standard number as 100,000,000


// ********************************Math**********************************

console.log(Math); // an object
console.log(Math.abs(-5.67));
console.log(Math.round(56.98));

// Generating Random Values
console.log(Math.random()); // gives values between 0 and 1
console.log((Math.floor(Math.random()*10))+1); // between 1 and 10

const min = 15;
const max = 30;

console.log(Math.floor(Math.random()* (max - min))+min); // between 15 and 30

