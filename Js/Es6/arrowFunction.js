// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
// Arrow function uses arrow instead of the keyword function to declare a function.

// function square(n) {
//   return n * n;
// }

// console.log(square(2)); // 4

// const square = (n) => {
//   return n * n;
// };

// console.log(square(2)); // -> 4

// Function with default parameters
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}
// Calling function
functionName();
functionName(arg);
