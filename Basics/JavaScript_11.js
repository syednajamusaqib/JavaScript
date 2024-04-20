// **************************** OBJECTS PART_2 ****************************
const newObject = new Object();
console.log(newObject);

newObject.id = "1";
newObject.name = "Syed Najam";
newObject.Gpa = 3.3;
newObject.isLoggedIn = false;

console.log(newObject);

const nestedObject = {
	userName: {
		fullName: {
			firstName: "Syed",
			middleName: "Najam",
			lastName: "Saqib"
		}
	}
}

console.log(nestedObject.userName.fullName.lastName);

// Merging Two objects

const obj1 = {
	1: "a",
	2: "b",
	3: "c"
};

const obj2 = {
	4: "d",
	5: "e",
	6: "f"
};

const obj11 = {
	7: "g"
}
// assign is one way but not preffered one
const obj3 = Object.assign({},obj1,obj2,obj11); // can give more than 2 objects 
// if we don't use {} then all other objects will also be copied to first object which is obj1
console.log(obj3);
// console.log(obj1);

// Preffered way 
const obj4 = {...obj1,...obj2};
console.log(obj4);

// Databases give arrays of objects

const dataBase = [
	{
	user1: "Syed"
	},
	{
	user2: "Najam"
	},
	{
	user3: "Saqib"
	}
];

console.log(dataBase[1].user2);

// Getting keys, values, entries
console.log(Object.keys(newObject)); // Returns array
console.log(Object.values(newObject)); 
console.log(Object.entries(newObject)); 

// Whether a property exists in object

console.log(newObject.hasOwnProperty('name')); // true

// Destructuring Objects

const object = {
	name: "Najam",
	age: 19
}

const {name} = object;
console.log(name); // No need to write object.name
const {name: n} = object; // using alias
console.log(n); // No need to write object.name
