// Conditional statements are used for make decisions based on different conditions.
// Conditional execution: a block of one or more statements will be executed if a certain expression is true
// Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements.

// ***************************If
// In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

// syntax
// if (condition) {
//   //this part of code runs for truthy condition
// }

// let num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// }
//  3 is a positive number

// ************************If Else
// If condition is true the first block will be executed, if not the else condition will be executed.

// syntax
// if (condition) {
//   // this part of code runs for truthy condition
// } else {
//   // this part of code runs for false condition
// }

// let num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

//If Else if Else
// On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.

// syntax
// if (condition) {
//   // code
// } else if (condition) {
//   // code
// } else {
//   //  code
// }

// let a = 0;
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

// Switch
// Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.

// switch (caseValue) {
//   case 1:
//     // code
//     break;
//   case 2:
//     // code
//     break;
//   case 3:
//     // code
//     break;
//   default:
//   // code
// }

// let weather = "cloudy";
// switch (weather) {
//   case "rainy":
//     console.log("You need a rain coat.");
//     break;
//   case "cloudy":
//     console.log("It might be cold, you need a jacket.");
//     break;
//   case "sunny":
//     console.log("Go out freely.");
//     break;
//   default:
//     console.log(" No need for rain coat.");
// }

// Ternary Operators
// Another way to write conditionals is using ternary operators.

// let isRaining = true;
// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");
