// Confusing Isn't it 😉

console.log(1+"2"); // 12
console.log("1"+2); // 12
console.log(1+2+"2"); // 32
console.log("1"+2+2); // 122
console.log("2"+"2"-2); // 20


// Another confusing part
// Comparisons (>,>=,<=,<) converts null into a number (0)
// While ==, === treats it as a null value

console.log("2">1); // true
console.log("1">1); // false

// Try to avoid conversions given

console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == 0); // false (Khrabi)
console.log(null === 0); // false

// You can do above with undefined as well
// strict check (===) it also checks data types of operands









