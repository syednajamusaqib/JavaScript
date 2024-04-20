// This is how promise is created but we have to consume it
const promisOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        // console.log("Hello SetTimeOut 1");
        resolve();
    },1000)
})

// Consuming the promise

promisOne.then(()=>{
    // console.log("Inside Consumption of promise #1");
})

// Short hand Notation for above Code

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Hello SetTimeOut 1");
        resolve();
    },1000)
}).then(()=>{
    console.log("Inside Consumption of promise #1");
})


// Wait!!! We want our then to receive data but how??

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Hello SetTimeOut 2");
        resolve({name: "najam", age: 19});
    },1000)
})

promiseTwo.then((user)=>{
    console.log(user);
})

// What if we encounter an error while getting data

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false; // play with true or false
        if(!error){
            resolve({name: "saqib", age: 19})
        }else{
            reject("Could not find info")
        }
    },1000)
})

promiseThree
.then((user)=>{
    return user.name;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(`ERROR: ${err}`);
})
.finally(()=>{
    console.log("AT the end");
})


// Do the same with async/await

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true; // play with true or false
        if(!error){
            resolve({name: "saqib", age: 19})
        }else{
            reject("Could not find info")
        }
    },1000)
})

async function consume(){
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consume();

// Let's play with fetch
import fetch from 'node-fetch'

async function apiRequest(){
    try {
        const response = await fetch("https://api.github.com/users/syednajamusaqib");
        const data = await response.json();
        // console.log(data);
    } catch (err) {
        // console.log(err);
    }
}

apiRequest();


fetch("https://api.github.com/users/syednajamusaqib")
.then((response)=>{
    return response.json();
}).then((data) => {
    console.log(data);
})


