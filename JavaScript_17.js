// ********************** For Each ***************************

const array = ["js","python","cpp","java","c"];

array.forEach(function (value){
	// console.log(value); // KHALLI WALLI
})

// using arrow functions

array.forEach((key)=>{
	// console.log(key);
}) 

function print(key){
	// console.log(key);
}
// array.forEach(print); // Can be done in this way

array.forEach((item, index, array) => {
	// console.log(item , index, array); // remember the properties
})

// Working with arrays containing objects

const objectList = [
	{
		"Name": "Najam",
		age: 18.5
	},
	{
		"Name": "Saqib",
		age: 19.5
	},
	{
		"Name": "Shah G",
		age: 49
	}
]

objectList.forEach((item) => {
	console.log(item["Name"]); 
})

// Note: For Each loop does not return / returns undefined value 




 

