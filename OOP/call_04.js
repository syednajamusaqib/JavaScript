// Let's say we are registering users on site
function setUserName(username){ // this function sets username
    this.username = username
}

function regDetails(username, email, password){
    // As above function sets username so why not call it there
    // setUserName(this.username);  // with this it will never set username
    // Reason is when this function is called it will loose username as it will be popped out of func call stack
    setUserName.call(this,username); // Now see the difference
    this.email = email;
    this.password = password;
}

const obj = new regDetails("Syed Najam","Najam@najam.com","123");
console.log(obj);