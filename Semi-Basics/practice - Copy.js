// Objects with for of 
const object = {
	"Name" : "Najam",
	age : 19,
	roll : 15
};

for(const key in object){ // for of will not work on objects
	console.log(`${key} => ${object[key]}`);
};

// For each

const array = [3,6,7,8,8];

array.forEach((key)=>{
	console.log(key);
})