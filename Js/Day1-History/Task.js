// 1.Write a single line comment which says, comments can make code readable

// comments can make code readable

// 2.Write another single line comment which says, Welcome to 30DaysOfJavaScript

// Welcome to 30DaysOfJavaScript

//3.Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/** comments can make code readable, easy to reuse and informative */

//4.declare variables and assign string, boolean, undefined and null data types

let name = "John Doe";
let isStudent = true;
let age = undefined;
let job = null;

//5.use the JavaScript typeof operator to check different data types. Check the data type of each variable

console.log(typeof name); // string
console.log(typeof isStudent); // boolean
console.log(typeof age); // undefined
console.log(typeof job); // object

//6.change the data type of some variables and check the data type again

let myAge = 25;
console.log(typeof myAge); // number

let yourAge = "30";
console.log(typeof yourAge); // string

let isMarried = true;
console.log(typeof isMarried); // boolean

let isSingle = null;
console.log(typeof isSingle); // object

let isWorking = undefined;
console.log(typeof isWorking); // undefined

//7.use typeof operator to check data type of different variables and console log the results

console.log(typeof name); // string
console.log(typeof isStudent); // boolean
console.log(typeof age); // undefined
console.log(typeof job); // object

//8.Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
// I am 25 years old.
// You are 30 years old.

let myAge1 = 25;
let yourAge1 = 30;
console.log(`I am ${myAge1} years old.`);
console.log(`You are ${yourAge1} years old.`);
