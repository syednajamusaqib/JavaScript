// Classes are just kind of wrapper over prototype in JS

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods/Functions
    pass(){
        return `${this.password}123`;
    }
    name(){
        return `${this.username.toUpperCase()}`;
    }
}

// Create Object of class
const newUser = new User("Najam","na@najam.co","rTs");

console.log(newUser.pass());
console.log(newUser.name());

// Now Let's see what's happening behind the scenes

function User1(username, email, password){ // Same as we created class
    this.username = username;
    this.email = email;
    this.password = password;    
}

// Let's Implement so called class methods by prototype

User1.prototype.name = function(){
    return `${this.username.toUpperCase()}`;
}

User1.prototype.pass = function(){
    return `${this.password}123`;
}

const user = new User1("Saqib","saq@najam.co","2yt");
console.log(user.pass());
console.log(user.name());
// ******************************* SMJHE NA *************************************