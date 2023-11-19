// **************************** OBJECTS PART_2 ****************************
const newObject = new Object();
console.log(newObject);

newObject.id = "1";
newObject.name = "syednajam";
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

// assign is one way but not preffered one
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

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


