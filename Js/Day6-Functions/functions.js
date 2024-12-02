// A function is a reusable block of code or programming statements designed to perform a certain task.
// A function is declared by a function key word followed by a name, followed by parentheses ().
// A parentheses can take a parameter. If a function take a parameter it will be called with argument.
// A function can also take a default parameter.
// To store a data to a function, a function has to return certain data types.
// To get the value we call or invoke a function.

// Function makes code:

// clean and easy to read
// reusable
// easy to test

// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function

// Function Declaration
// Let us see how to declare a function and how to call a function.

//declaring a function without a parameter
// function functionName() {
//   // code goes here
// }
// functionName() // calling function by its name and with parentheses

// Function without a parameter and return
// Function can be declared without a parameter.

// function without parameter,  a function which make a number square
// Example: function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }

// square(); // 4

// function without parameter
// function addTwoNumbers() {
//   let numOne = 10;
//   let numTwo = 20;
//   let sum = numOne + numTwo;

//   console.log(sum);
// }

// addTwoNumbers(); // a function has to be called by its name to be executed

// Function returning value
// Function can also return values, if a function does not return values the value of the function is undefined.

// function addTwoNumbers() {
//   let numOne = 2;
//   let numTwo = 3;
//   let total = numOne + numTwo;
//   return total;
// }

// console.log(addTwoNumbers());

// Function with a parameter
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// function with one parameter
// function functionName(parm1) {
//   //code goes her
// }
// functionName(parm1); // during calling or invoking one argument needed

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }

// console.log(areaOfCircle(10)); // should be called with one argument

//Function with two parameters

// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}

// Anonymous Function
// Anonymous function or without name

// const anonymousFun = function () {
//   console.log(
//     "I am an anonymous function and my value is stored in anonymousFun"
//   );
// };

// Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.

// const square = function (n) {
//   return n * n;
// };

// console.log(square(2)); // -> 4

// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.

// (function(n) {
//   console.log(n * n)
// })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum = (function(n) {
//   return n * n
// })(10)

// console.log(squaredNum)
