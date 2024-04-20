// Call is a function that helps you change the context of the invoking function. 
// In layperson's terms, it helps you replace the value of this inside a function 
// with whatever value you want.


// func.call(thisObj, args1, args2, ...)


function info(){
    console.log(this);
    console.log(`My name is ${this.name}`);
}

const obj = {
    name: "Syed Najam",
    func: function(){
        console.log(this);
    }
}

info.call(obj);


obj.func();


// The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed

// func.apply(thisObj, argumentsArray);

// func.apply(thisObj, [args1, args2, ...]);






