// Set is a collection of elements. Set can only contains unique elements.

// Creating an empty set

// const companies = new Set();
// console.log(companies);

// Creating set from array

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
// console.log(setOfLanguages);

// Set is an iterable object and we can iterate through each elements.

// for (let item of setOfLanguages) {
//   console.log(item);
// }

// Adding an element to a set

const companies = new Set(); // creating an empty set
// console.log(companies.size);

companies.add("Google");
companies.add("Uber");
companies.add("Ola");
companies.add("Harman");
// console.log(companies.size);

// Deleting an element a set
// We can delete an element from a set using a delete method.

// console.log(companies.delete("Google"));
// console.log(companies.size); // 4 elements

// Checking an element in the set
// The has method can help to know if a certain element exists in a set.

// console.log(companies.has("Apple")); // false
// console.log(companies.has("Ola")); // true

// Clearing the set
// It removes all the elements from a set.

// companies.clear();
// console.log(companies);

// For instance to count unique item in an array.

// const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
// const setOfNumbers = new Set(numbers);

// console.log(setOfNumbers);

// Union of sets
// To find a union to two sets can be achieved using spread operator.

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// console.log(C);

// Intersection of sets
// To find an intersection of two sets can be achieved using filter.

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));
// let C = new Set(c);

// console.log(C);

// Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => !B.has(num));
// let C = new Set(c);

// console.log(C);

// ********************************Map
// Creating an empty Map

// const map = new Map();
// console.log(map);

// Creating an Map from array

// countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

// Adding values to the Map
// const countriesMap = new Map();
// console.log(countriesMap.size); // 0
// countriesMap.set("Finland", "Helsinki");
// countriesMap.set("Sweden", "Stockholm");
// countriesMap.set("Norway", "Oslo");
// console.log(countriesMap);
// console.log(countriesMap.size);

// Getting a value from Map

// console.log(countriesMap.get("Finland"));

// Getting all values from map using loop

// for (const country of countriesMap) {
//   console.log(country);
// }
