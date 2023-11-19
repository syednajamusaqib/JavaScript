// Conversions of DataTypes (Nightmare 😂)

let value = "33";
console.log(typeof(value));

// Converting string to number
let valueInNumber = Number(value);
console.log(typeof(valueInNumber)); // So far so good

// Converting string that cannot be a number into number
let newValue = "33abc";
let valueInNumber2 = Number(newValue);
console.log(valueInNumber2); // Gives NaN which is a number in JS🙄

// Converting undefined to number
let undef;
let undefNumber = Number(undef);
console.log(undefNumber); // Gives NaN again

let number = 0;
let bool = Boolean(number);
console.log(bool); // Gives true 0 => false but someothernumber => true

// Boolean Conversions
// 1 => true && 0 => false
// "" => false && "anyString" => true
console.log(Boolean(""));
