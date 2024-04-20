// ************************************************************
// Memory Allocation (Stack vs Heap)
// Stack (Primitive)  Heap(Non-Primitive)

let userInfo_1 = {
	name: "Syed Najam",
	age: 19,
	mail: "syednajam@gmail.com"
};

let userInfo_2 = userInfo_1;

userInfo_2.age = 18.5; // Both will be changed as reference is given

// console.table([userInfo_1,userInfo_2]);

// ************************************************************
// Strings Concatenation Using backticks(like f-strings)

let name = "Hello Syed";
let age = 20;

const gameName = new String("SuperMario"); // Second way or preffered way
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(`Name of Person is ${name} and game is ${gameName}`); // String Interpolation

// Playing with string Methods 🤩
const findingChar = gameName.charAt(4);
// console.log(findingChar);

const range = gameName.substring(0,6); // if you give -ve value at start it will ignore it
console.log(range);

const slicing = gameName.slice(-1); // Just like python but can take 2 arg(start,end)
console.log(slicing);

const string = "Syed Najam U Saqib";
console.log(string.split(" ")); // Just like python
// replace, trim(trims whitespaces), includes





