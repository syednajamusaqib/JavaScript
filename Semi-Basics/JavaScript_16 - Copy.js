// ******************* LOOPS/iterations 😁(Bopendar Jogi)******************

for (let i = 1; i <=10; i++) {
	if(i%3 == 0){
		// console.log(i);
	}
}

// Break && Continue

for(let i=0;i<=10;i++){
	if(i==5){
		break;
	}
	// console.log(i);
}

for(let i=0;i<=5;i++){
	if(i==3){
		continue;
	}
	// console.log(i);
}

// While loop

let score = 0;
while(score <=10){
	// console.log(score);
	score += 2;
}

// Do-While loop

let scores = 1;
do{
	// console.log(scores);
	scores++;
} while(scores <=5);

// for of loop

let arr = [9,8,7,6,5,4];
for (const a of arr) {
	// console.log(a);
}

let greeting = "Hello Najam";
for(const greet of greeting){
	// console.log(greet);
}

// Maps

const map = new Map();
map.set("Name","Najam");
map.set("age","19 munde di");
map.set("Interest","Cricket");

// console.log(map);

for(const key of map){
	console.log(key);
}// We don't want results to be in this form

for(const [key,value] of map){ // bahut use hoga aage
	console.log(key , "=>", value);
}

const object = {
	"Name": "Syed Najam U Saqib",
	age: 18.5,
	height: "Kbhi notice nhi ki"
} // we cannot iterate as we did in maps
// For this we For in loop

for(const key in object){
	console.log(`${key} => ${object[key]}`);
}

const myArray = ["js","cpp","java","python"];

for(const key in myArray){
	console.log(myArray[key]);
}

// Final Verdict or Interview perspective
// For of loop gives values and used on maps and arrays
// For in loop gives keys and used on objects and arrays








