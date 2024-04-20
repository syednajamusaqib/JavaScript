// EveryOther objects goes in the path of Object then Object--> null
// Idea is if we insert some methods into Object then arrays, strings will automatically get that

// Let's Implement it

const obj = {
    username: "Najam U Saqib",
    age: 19,
    greeting: function(){
        console.log(`Welcome ${this.username}`);
    }
}

Object.prototype.sayHi = function(username){
    console.log(`Hi ${username}`);
}

const arr = [1,2,3,4]
arr.sayHi("Saqib"); // See array has also this method even though we just defined it for Object

obj.sayHi("Najam");

// Inheritance

const user = {
    name: "Najam",
    age: 19
}

const user1 = {
    height: 34
}

// One way is to simply inherit inside the object

const user2 = {
    __proto__: user1
}

console.log(user2.height);

// Can do it outside

// user1.__proto__ = user

// console.log(user1.name);

// Another method or convenient one
Object.setPrototypeOf(user1,user)
console.log(user1.name);