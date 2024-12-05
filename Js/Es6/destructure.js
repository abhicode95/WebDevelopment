// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;

// console.log(numOne, numTwo, numThree);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontend, backend] = fullStack;

// console.log(frontend, backend);

// If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const numbers = [1, 2, 3];
let [numOne, , numThree] = numbers; //2 is omitted

// console.log(numOne, numThree);

// We can use default value in case the value of array for that index is undefined:

const names = [undefined, "Brook", "David"];
let [
  firstPerson = "Asabeneh",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = names;

// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

// console.log(num1, num2, num3);
// console.log(rest);

// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object.

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };

// const { width, height, area } = rectangle;
// console.log(width, height, area);

// Renaming during structuring
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width: w, height: h, area: a, perimeter: p } = rectangle;

// console.log(w, h, a, p);

const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calculatePerimeter(rect));
