// Array Methods

const Names = ["Syed","Najam","Saqib"];
const City = ["Kot Addu","Multan","Tounsa"];

// Names.push(City); // Appends at last but as single element
console.log(Names);

const newArray = Names.concat(City); // Appends all elements but needs to be stored because it just returns the value
console.log(newArray);

// Using spread(...) operator
const newArray2 = [...Names, ...City]; // Preffered by most people as it can take as many values as you give
console.log(newArray2);


const depthArray = [2,3,4,[7,6,5],4,-5,[0,1,2,5,[-8,-6,-4]]];
console.log(depthArray.flat(2)); // flat(argument is depth, can give infinity😎)

// Scraping material😍

console.log(Array.from("Syed Najam U Saqib")); // Converts given string etc into array

// Interesting Interview Question

console.log(Array.from({name: "Najam"})); // Compiler is confused whether use key or value so it returns empty array

// Converting multiple into arrays
 let score1 = 89;
 let score2 = 74; 
 let score3 = 92; 

 console.log(Array.of(score1, score2, score3));


 // ****************************KHALLI WALLI😂********************************
