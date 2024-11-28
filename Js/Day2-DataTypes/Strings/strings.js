// Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.
// Let's see some examples of strings:

let space = " "; // an empty space string
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// String Concatenation
// Connecting two or more strings together is called concatenation. Using the strings declared in the previous String section:

let fullName = firstName + space + lastName; // concatenation, merging two string together.
// console.log(fullName);

// Long Literal Strings
// A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \

// Template Literals (Template Strings)
// To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

// //Syntax
// `String literal text`
// `String literal text ${expression}`
// let a = 2;
// let b = 3;
// console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically

// ************************Checking Data Types and Casting

// Checking Data Types
// To check the data type of a certain variable we use the typeof method.

// console.log(typeof "Asabeneh"); // string
// console.log(typeof firstName); // string
// console.log(typeof 10); // number
// console.log(typeof 3.14); // number
// console.log(typeof true); // boolean
// console.log(typeof false); // boolean
// console.log(typeof NaN); // number
// console.log(typeof job); // undefined
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

// We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)
// let num = '10'

// String to Int
let num = "10";
console.log(+num);
console.log(Number(num));
console.log(parseInt(num));
