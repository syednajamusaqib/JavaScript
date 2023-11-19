// ************************** Functions ***********************************
function addNumbers(num1, num2){
	return num1 + num2;
}

console.log(addNumbers(3,5));

function userName(username){ // an put default parameters as (username="Najam")
	if(!username){
		console.log(`Enter valid username`);
		return;
	}
	console.log(`${username} just Logged in!`);
}

userName("Najam ");

function cartPrice(...num){ // ...(rest operator) as *args in python
	return num;
}
console.log(cartPrice(4,5,7,8));

// Object as function parameter
const user = {
	name: "Syed Najam",
	age: 18.6
}

function passObject(object){
	console.log(`Username is ${object.name} and age is ${object.age}`);
}
// undefined value occurs if name or age is not defined so type checking is necessary in this case 
passObject(user);

// Arrays as parameters
const myArr = [4,5,6,7];

function getSecondElement(array){
	return array[1];
}

console.log(getSecondElement(myArr));