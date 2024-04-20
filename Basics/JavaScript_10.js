// ************************* OBJECTS USING literals **********************************

// Two ways literals(Not singleton)  Constructor(Singleton)

// Interview Question😉 (Use symbol as key in object)

const mysymb = Symbol("key");


const myObject = {
	name: "Najam",
	age: 19,
	[mysymb]: "Symbol Key", // Right way to declare it in object
	"interest": "Cricket",
	LastName: "Saqib",
	email: "syednajamusaqib@gmail.com",
	address: "127.0.0.1",
	unknown: [3,4,5,6,7]
};
// Depends on situation 
console.log(myObject["name"]);

// console.log(myObject.interest); // Cannot access like this as it is a string
console.log(myObject.age);
console.log("Another Way");
console.log(myObject["age"]);
console.log(myObject[mysymb]); // Syntax

// Changing values and freezing it 
myObject[mysymb] = "New Key";
console.log(myObject[mysymb]);

// Object.freeze(myObject); // No one can change value
myObject[mysymb] = "New";
console.log(myObject[mysymb]);

myObject.greeting = function(){
	// console.log(`Hello User ${this.name}`);
	return `Hello User ${this.name}`; // to avoid getting undefined at the end
}

console.log(myObject.greeting());







