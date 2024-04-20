// *********************************Dates*********************************
// Important for Interview Perspective 🙄😎
const newDate = new Date(); // Will store the current date

console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toLocaleString());
console.log(newDate.toDateString());

// Creating your own Date

const myDate = new Date(2023,6,23,6,56,45); // Date(year, month(0-11), date, hour, minute, second)
console.log(myDate.toString());
const anotherWay = new Date("2023-06-23"); // Date("YYYY-MM-DD") == Date("MM-DD-YYYY")
console.log(anotherWay.toString());
let inMS = Date.now();
console.log(inMS);

// Converting Date into milliseconds and seconds

console.log(myDate.getTime()); // gives milliseconds
console.log(Math.floor(myDate.getTime()/1000));

// Getting months, days etc

console.log(myDate.getMonth());

// toLocaleString with custom parameters

const date = new Date();

console.log(date.toLocaleString());

const date1 = date.toLocaleString('default',{
    // weekday : 'long',
    // day : 'numeric',
    dateStyle : 'full'
})

console.log(date1); // See the difference






