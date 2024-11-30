// An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

// Each value in an array has an index, and each index has a reference in a memory address. Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

// How to create an empty array
// 1.Using Array constructor
// const myArr = Array();
// console.log(myArr);

//2.Using square brackets([])
// const myArr2 = Array();
// console.log(myArr2);

// How to create an array with values
// Array with initial values. We use length property to find the length of an array.

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

// Print the array and its length

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// console.log("Fruits:", fruits);
// console.log("Number of fruits:", fruits.length);

// Array can have items of different data types

// const arr = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ]; // arr containing different data types
// console.log(arr);

// Creating an array using split
let myStr = "Abhishek";
const result = myStr.split("");
// console.log("Result", result);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

// console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

// console.log(words);

// Accessing array items using index
// We access each element in an array using their index.

const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index

// console.log(firstFruit); // banana

secondFruit = fruits[1];
// console.log(secondFruit); // orange

let lastFruit = fruits[3];
// console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

// console.log(lastFruit); // lemon

// Modifying array element
// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing  2 at index 1 to 20

console.log(numbers); // [10, 20, 3, 4, 5]
