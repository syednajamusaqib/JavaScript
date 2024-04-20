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



// ********************* FILTER etc **************************
const array = [1,2,3,4,5,6,7,8,9,10];

// It returns values depending on conditions, so needs to be stored

const newArray = array.filter( (item) => item > 6);
// console.log(newArray); 

// Beginners mistake

const arr = array.filter( (num) => {
	num > 6; // it will give empty so we have to use explicit return  --> return num>6
});

// console.log(arr);

const empArray = [];

array.forEach( (num) => {
	if(num > 6){
		empArray.push(num);
	}
});

// console.log(empArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let book = books.filter( (item) => item.genre === 'History'); // smjhe Kaise use hota ye
// console.log(book);

let books2000 = books.filter( (bk) => bk.publish>=1995 && bk.genre === 'History');
// console.log(books2000);

// *********************** MAP ******************************
const numarray = [1,2,3,4,5,6,7];

const ans = numarray.map( (num) => num + 10);
// console.log(ans);

// Chaining (Using multiple methods together)
const chain = numarray
					.map( (num) => num * 10)
					.map( (num) => num + 3)
					.filter( (num) => num > 38);
console.log(chain);


// Most Important reduce method

const total = numarray.reduce( (acc, curr) => acc + curr,0);

console.log(total);

const object = [
	{
		Type: "Oppo",
		price: 12999
	},
	{
		Type: "Iphone",
		price: 129999
	}
];

const MoblToatal = object.reduce( (acc, item) => acc + item.price,0);

console.log(MoblToatal);





 

