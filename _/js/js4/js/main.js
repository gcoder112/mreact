// Numbers

// An integer is a whole number.
const myNumber = 42;
// console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;
// console.log(myFloat);

const myString = "42";
// console.log(myString);
// console.log(myFloat === myString);
// console.log(myNumber === myFloat);
// console.log(myString + 3);
// console.log(Number(myString) + 3);
// console.log(Number("Dave"));
// console.log(Number(undefined));
// console.log(Number(true));
// console.log(Number(false));

// Number Methods
// The Number.isInteger() method determins whether the passed value is an integer.
console.log(Number.isInteger(123.0));

// The Number.parseFloat() method parses an argument and returns a floating point number.  If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myString));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myString));
console.log(typeof myFloat.toString());

// NaN is an acronym for Not a Number
// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.
console.log(Number.isNaN("Dave"));
console.log(isNaN("Dave"));