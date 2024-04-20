// ********************** ARROW FUNCTIONS *************************

const myObject = {
	name: "Syed Najam",
	age: 18.5,
	welcomeMessage: function(){
		console.log(`${this.name} , Welcome to my Website!`); // this refers to current context({this is context or maybe scope😊})
		console.log(this); // will give current context/values
	},
	
}

myObject.welcomeMessage();
myObject.name = "Najam U Saqib";
myObject.welcomeMessage();
console.log(this); 
// NOTE : In node env this will give empty object but in browser it will give window
// NOTE_2 : We can use this in objects not in functions that we learned earlier

function func(){
	console.log(this); // this k andar kuch to pra hai
}
func();

function usingThis(){
	let name = "Najam";
	console.log(this); // Gives undefined refer to NOTE_2
}
usingThis();

// Lets move to arrow functions

const useThisInArrow = () => { 
	console.log(this); // this has different behaviour in this case {}
}
useThisInArrow();

const add = (num) => {
	return num + num;
}

console.log(add(7));

// Arrow functions have implicit return statements.
const addNumber = (num) => (num + num); // you can think of lambda fun in python in sense of shorter syntax
// (num + num ), () is useful when you want to return object so use it always to ensure safety
console.log(addNumber(7));


// Immediately Invoked Function Expressions (IIFE) ==> Executes immediately
// Advantages of IIFE: Do not create unnecessary global variables and functions
// or to get rid of pollution created by global variables
// Syntax (Function)(For execution)

(function Greeting(){
	// Named IIFE
	console.log("Hola Najam");
})(); // Semi-Colon is necesary if you want to create multiple IIFE

(function Get(){
	// Named IIFE
	console.log("Najam Bhai");
})();

// With parameters

((num)=>{
	// Simple IIFE without name
	console.log(`Number is ${num}`);
})(7);


// ************************ 😂😎 KHALLI WALLI 😎😂 ******************************