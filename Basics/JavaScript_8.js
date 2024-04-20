// Arrays 😍
const arr = [4,6,3,-5,8,7]; // Deep Copy(With reference)
// console.log(arr[4]);

// Second method as object as always discussed
const newArr = new Array(1,4,7,9,8);
// console.log(newArr);

// Array Methods
newArr.push(-8);
newArr.push(3);
newArr.pop(); // takes no arguments
// console.log(newArr);

newArr.unshift(3); // appends at start so whole array needs to be shifted(Time consuming but beneficial some times)
// console.log(newArr);
newArr.shift(); // just like pop but from the start
// console.log(newArr);

// Other methods include(), indexOf(), join()=> converts to string
// Important😊
const array = new Array(0,3,5,7,8,8,4,2);
console.log("A ",array);

const myarr1 = array.slice(1,4); // 1,2,3 range exclusive
console.log("B ",array);
console.log(myarr1);

const myarr2 = array.splice(1,4); // range inclusive, splice removes these elements from array
console.log("C ",array);
console.log(myarr2);



