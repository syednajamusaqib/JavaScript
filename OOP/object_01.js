// object literal

const user = {
    name: "najam",
    age: 19,
    isLoggedIn: true,

    greeting: function(){
        console.log(`Welcome ${this.name}`);
        console.log(this);
    }
    
}

console.log(user.greeting());
console.log(this);


// Constructor Function 

function User(name, age, isLoggedIn){
    this.name = name;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
}

const newUser = new User("saqib",18,false);
console.log(newUser.age);
// new means distinct instance 
// If we don't use new then prev object values will be overwritten