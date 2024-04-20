// ************************ Control Statements **************************

let score = 200;

if(score > 150){
	// console.log("Greater than 150");
}
else{
	console.log("Not Greater");
}

// Single liner (can take multiple expressions)
// if(score > 150) console.log("Greater than 150"), console.log("Greater");

// Switch Statement

const day = 5;

switch(day){
	case 2:
		console.log("Tuesday");
		break;
	case 5:
		// console.log("Friday");
		break;
	default:
		console.log("Sunday");
		break;
}

// Interview Time 😎
// Truthy / falsy
// falsy values (false,0,-0,BigInt(0n),null,undefined,"",NaN)
// Truthy values ("0","false"," ",[],{},function(){})

// Nullish Coalescing Operator(??) focuses on null and undefined
// NOTE_1: If database gives you null or undefined you dont want your program to crash so ?? will protect it from doing this
let value = 45;
value = null ?? 34; // => NOTE_1
let num;
num = null ?? 45;
console.log(num);
value = null ?? undefined ?? 10;
value = null ?? 13 ?? 45;
console.log(value);

// Ternary Operator
let val = 34;
val > 40 ? console.log("Not Greater than 34") : console.log("<= 34");


