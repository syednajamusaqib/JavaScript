// Example NO 1

// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// })

// Promise.resolve().then(()=> console.log(3))


// Promise.resolve().then(()=> setTimeout(()=>{
//     console.log(4);
// }))

// Promise.resolve().then(()=> console.log(5))

// setTimeout(()=>{
//     console.log(6);
// })

// console.log(7);


// Example NO 2

// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 0);

// new Promise((resolve, reject) => {
//     resolve('C');
// }).then(resolve => console.log(resolve));

// console.log('D');


// Exanple NO 3

// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B'));
// (() => console.log('C'))();

// Example NO 4

// setTimeout(() => console.log('A'), 100);
// Promise.resolve().then(() => console.log('B'));
// Promise.resolve().then(() => {
//     setTimeout(() => console.log('C'), 100);
// });
// console.log('D');


// Example NO 5

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D');
// Promise.resolve().then(() => console.log('E'));


// Example NO 6 (Tricky one)

// setTimeout(() => console.log('A'), 0);
// new Promise((resolve, reject) => {
//     console.log('B');
//     resolve();
// }).then(() => {
//     console.log('C');
//     setTimeout(() => console.log('D'), 0);
// });
// console.log('E');

// Example NO 7

// console.log('A');
// Promise.resolve().then(() => console.log('B'));
// setTimeout(() => console.log('C'), 10);
// setTimeout(() => console.log('D'), 0);
// console.log('E');

// Example NO 8

// console.log('A');
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(console.log('B')), 0);
// }).then(() => console.log('C'));
// console.log('D');

// Example NO 9

// console.log('A');
// Promise.resolve().then(() => {
//     console.log('B');
//     setTimeout(() => console.log('C'), 0);
// });
// setTimeout(() => console.log('D'), 10);
// console.log('E');

// Example NO 10

// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B')).then(() => console.log('C'));
// console.log('D');


// Example NO 11

// Promise.resolve().then(() => console.log('A'));
// setTimeout(() => console.log('B'), 0);
// (() => console.log('C'))();

// Example NO 12

// console.log('A');
// setTimeout(() => {
//     console.log('B');
//     Promise.resolve().then(() => console.log('C'));
// }, 0);
// console.log('D');

// Example NO 13

// Promise.resolve().then(() => console.log('A'));
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D');

// Example NO 14

// console.log('A');
// Promise.resolve().then(() => {
//     console.log('B');
//     Promise.resolve().then(() => console.log('C'));
// });
// setTimeout(() => console.log('D'), 0);
// console.log('E');

// Example NO 15

// setTimeout(() => console.log('A'), 10);
// console.log('B');
// Promise.resolve().then(() => {
//     setTimeout(() => console.log('C'), 10);
//     console.log('D');
// });
// console.log('E');

// Example NO 16

// console.log('A');
// setTimeout(() => {
//     console.log('B');
//     Promise.resolve().then(() => console.log('C'));
//     setTimeout(() => console.log('D'), 0);
// }, 0);
// console.log('E');

// Example NO 17

// Promise.resolve().then(() => console.log('A'));
// setTimeout(() => {
//     console.log('B');
//     Promise.resolve().then(() => console.log('C'));
// }, 0);
// console.log('D');

// Example NO 18

// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => {
//     console.log('B');
//     setTimeout(() => console.log('C'), 100);
// });
// console.log('D');

// Example NO 19

// console.log('A');
// Promise.resolve().then(() => {
//     console.log('B');
//     Promise.resolve().then(() => console.log('C'));
// });
// setTimeout(() => console.log('D'), 0);
// Promise.resolve().then(() => console.log('E'));

// Example NO 20

// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B'));
// Promise.resolve().then(() => {
//     console.log('C');
//     setTimeout(() => console.log('D'), 0);
// });
// console.log('E');

// Example NO 21

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// setTimeout(() => console.log('D'), 0);
// console.log('E');


























