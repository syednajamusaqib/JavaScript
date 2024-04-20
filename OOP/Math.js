console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
console.log(Object.getOwnPropertyDescriptor(Math,"PI"));

Object.defineProperty(Math, "PI",{
    writable: true
    // value: 5
})
console.log(Math.PI);
