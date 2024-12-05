// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// Callback
// A callback is a function which can be passed as parameter to other function.

// a callback function, the name of the function could be any name
// const callback = (n) => {
//   return n ** 2;
// };

// Returning function
// Higher order functions return function as a value​

// Setting time
// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// setInterval
// setTimeout
// Setting Interval using a setInterval function

// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// setInterval(() => {
//   console.log("Interval");
// }, 2000);

// Setting a time using a setTimeout
// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// setTimeout(() => {
//   console.log("Interval");
// }, 2000);

// Functional Programming

// 1.forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional

// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr);
// });
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index, ar) => {
//   console.log(item, index, ar);
// });

//2.map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

// const modifiedArray = arr.map((element, index, arr) => {
//   return element;
// });

// const numbers = [1, 2, 3, 4, 5];
// const squaredNum = numbers.map((num) => num * num);
// console.log(squaredNum);

//3.Filter: Filter out items which full fill filtering conditions and return a new array.

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// const filteredCountries = countries.filter((item) => item.includes("land"));
// console.log(filteredCountries);

// const threeLetter = countries.filter((item) => item.length === 5);
// console.log(threeLetter);

// const scores = [
//   { name: "Asabeneh", score: 95 },
//   { name: "Lidiya", score: 98 },
//   { name: "Mathias", score: 80 },
//   { name: "Elias", score: 50 },
//   { name: "Martha", score: 85 },
//   { name: "John", score: 100 },
// ];

// const scoreGreater = scores.filter((item) => item.score > 90);
// console.log(scoreGreater);

//4.reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error

// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//   return;
// }, initialValue);

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);
// console.log(result);

//5.every: Check if all the elements are similar in one aspect. It returns boolean
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const strCheck = names.every((item) => typeof item === "string");
// console.log(strCheck);

//6.find: Return the first element which satisfies the condition

// const ages = [24, 22, 25, 32, 35, 18];
// const result = ages.find((item) => item < 20);
// console.log(result);

//7.findIndex: Return the position of the first element which satisfies the condition

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const nameIndex = names.findIndex((name) => name.length > 5);
// console.log(nameIndex);

//8.some: Check if some of the elements are similar in one aspect. It returns boolean

// const bools = [true, true, true, true];
// const areSomeTrue = bools.some((b) => b === true);
// console.log(areSomeTrue); //true

//9.sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method

// Sorting string values
// const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
// console.log(products.sort());

// Sorting Numeric values

// const numbers = [9.81, 3.14, 100, 37];
// const sortedValue = numbers.sort((a, b) => a - b);
// console.log(sortedValue);

// Sorting Object Arrays
// Whenever we sort objects in an array, we use the object key to compare.

// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1;
//   if (a.key > b.key) return 1;
//   return 0;
// });

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

users.sort((a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  return 0;
});

console.log(users);
