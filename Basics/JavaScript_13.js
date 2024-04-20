// *************************** SCOPE 🤣 *********************************

if(true){
	let a = 3;
	const b = 6;
	var c = 9;
}
// According to rule a, b, c are local so cannot be accessed outside scope
// console.log(a); // It follows scope rule
// console.log(b); // It follows scope rule
// console.log(c); // It doesn't follow scope rule that's why var is not preffered

// ******************** NESTED SCOPE *******************************

function one(){
	const name = "Najam";
	function two(){
		const age = 18.5;
		console.log(name);
	}
	// console.log(age); // Gives error as it cannot be accessed
	two();
}
one();

// Same with if/else

if(true){
	const name = "Najam";
	if(name === "Najam"){
		const age = "18.5";
		console.log(`Name is ${name} and age is ${age}`);
	}
	// console.log(age); // will give scope error
}
// console.log(name); // will give scope error

// Interview Question Time 😎 (Hoisting)

addOne(7); // No error
function addOne(num){ // if you declare like this you can call this function before its declaration😇
	return num + 1;
}

// addTwo(5); // Will throw an error
const addTwo = function(num){ // Now you cannot call this before
	return num + 2;
}