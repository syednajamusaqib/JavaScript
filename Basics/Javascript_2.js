"use strict"; // It restrict you to use new standard
/*
No need to use above statement always because new engines
come with already strict standards. It is just for your info
*/

// ECMA standard (tc39 + mdn) => Documentation

// Variables and datatypes
// 1 => primitive datatypes (They are call by values)

let name = "Najam U Saqib" // string
let age = 19 // number => (2^53 - 1) (bigint => etc)
let isHardWorking = true // boolean
let friends = null // null is standalone value (empty)
let success; // Undefined
// symbol => Uniqueness (Mostly used in react components)
// null(value) vs undefined(value not defined)

// 2 => Non Primitive or Reference Data Types (Arrays,Objects,Functions)

const array = [1,2,4,5];
let values = {
	name: "Najam",
	age: 19
};
console.log(values); 

// Interview Question

console.log(typeof null); // object(Fault of language or it is an object)
console.log(typeof undefined); // undefined
console.log(typeof name); // string
console.log(Number.MAX_SAFE_INTEGER);
// console.log(BigInt.MAX_SAFE_INTEGER);
