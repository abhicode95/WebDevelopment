// Assignment operators
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

let name = "Raj";

// Arithmetic Operators
// Arithmetic operators are mathematical operators.

// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

// let numOne = 4
// let numTwo = 3
// let sum = numOne + numTwo
// let diff = numOne - numTwo
// let mult = numOne * numTwo
// let div = numOne / numTwo
// let remainder = numOne % numTwo
// let powerOf = numOne ** numTwo

// console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

// Comparison Operators
// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

// console.log(3 > 2); // true, because 3 is greater than 2
// console.log(3 >= 2); // true, because 3 is greater than 2
// console.log(3 == 2); // false, because 3 is not equal to 2
// console.log(3 != 2); // true, because 3 is not equal to 2
// console.log(3 == "3"); // true, compare only value
// console.log(3 === "3"); // false, compare both value and data type
// console.log(0 == false); // true, equivalent
// console.log(0 === false); // false, not exactly the same
// console.log(0 == ""); // true, equivalent
// console.log(0 == " "); // true, equivalent
// console.log(0 === ""); // false, not exactly the same
// console.log(1 == true); // true, equivalent
// console.log(1 === true); // false, not exactly the same
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(NaN == NaN); // false, not equal
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // number

// console.log("mango".length == "avocado".length); // false
// console.log("mango".length != "avocado".length); // true
// console.log("mango".length < "avocado".length); // true
// console.log("milk".length == "meat".length); // true
// console.log("milk".length != "meat".length); // false
// console.log("tomato".length == "potato".length); // true
// console.log("python".length > "dragon".length); // false

// Logical Operators
// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// && ampersand operator example

// const check = 4 > 3 && 10 > 5; // true && true -> true
// const check = 4 > 3 && 10 < 5; // true && false -> false
// const check = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

// const check = 4 > 3 || 10 > 5; // true  || true -> true
// const check = 4 > 3 || 10 < 5; // true  || false -> true
// const check = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

// let check = 4 > 3; // true
// let check = !(4 > 3); //  false
// let isLightOn = true;
// let isLightOff = !isLightOn; // false
// let isMarried = !false; // true

// Increment Operator
// In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment.

// Pre - increment;
// let count = 0;
// console.log(++count); // 1
// console.log(count); // 1

// Post-increment
// let count = 0
// console.log(count++)        // 0
// console.log(count)          // 1

// Ternary Operators
// Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

// let isRaining = true;
// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");
// isRaining = false;

// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");
