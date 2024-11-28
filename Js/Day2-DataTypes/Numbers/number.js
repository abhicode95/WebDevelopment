// Numbers are integers and decimal values which can do all the arithmetic operations. Let's see some examples of Numbers
// Declaring Number Data Types

let age = 35;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram
// const PI = 3.14; // pi a geometrical constant

// More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

// ********************************Math Object
const PI = Math.PI;
// console.log(PI);

// Rounding to the closest number , if above .5 up if less 0.5 down
// console.log(Math.round(PI));//3

// console.log(Math.round(9.81)); //10
// console.log(Math.floor(PI)); // 3

// console.log(Math.ceil(PI)); //4
// console.log(Math.min(-5, 3, 20, 4, 5, 10)); //-5
// console.log(Math.max(-5, 3, 20, 4, 5, 10)); //20

// const randNum = Math.random(); // creates random number between 0 to 0.999999
// console.log(randNum);

// Let us  create random number between 0 to 10

const randNum = Math.floor(Math.random() * 10) + 1;
console.log(randNum);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2));

// Power
console.log(Math.pow(3, 2));
console.log(Math.E);

console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
