// A variable can be declared at different scope.
// Variables scopes can be:
// Global
// Local

// Variable can be declared globally or locally scope. Anything declared without let, var or const is scoped at global level.

// Window Global Object
// Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.
// let name = abhi;
// const age = 25;

// a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10; // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }
// console.log(a, b); // accessible

// Global scope
// A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

//scope.js
// let a = "JavaScript"; // is a global scope it will be found anywhere in this file
// let b = 10; // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b); // JavaScript 10, accessible
//   if (true) {
//     let a = "Python";
//     let b = 100;
//     console.log(a, b); // Python 100
//   }
//   console.log(a, b);
// }
// letsLearnScope();
// console.log(a, b); // JavaScript 10, accessible

// Local scope
// A variable declared as local can be accessed only in certain block code.

// 1.Block Scope
// 2.Function Scope

//scope.js
// let a = "JavaScript"; // is a global scope it will be found anywhere in this file
// let b = 10; // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b); // JavaScript 10, accessible
//   let value = false;
//   // block scope
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = "Python";
//     let b = 20;
//     let c = 30;
//     let d = 40;
//     value = !value;
//     console.log(a, b, c, value); // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value); // JavaScript 10 true
// }
// letsLearnScope();
// console.log(a, b); // JavaScript 10, accessible

//  A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

// When we use let our variable is block scoped and it will not infect other parts of our code.

// The scope let and const are the same. The difference is only reassigning. We can not change or reassign the value of the const variable.
