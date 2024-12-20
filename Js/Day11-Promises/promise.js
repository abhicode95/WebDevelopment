// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// A pending promise can either be fulfilled with a value, or rejected with a reason (error).
// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// Promise constructor
// We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.

// const myPromise = new Promise((resolve, reject) => {
//   const isLoggedIn = false;
//   if (isLoggedIn) {
//     resolve("Done");
//   } else {
//     reject("Game Over");
//   }
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Fetch API

// const fetchData = () => {
//   fetch("https://restcountries.com/v2/all")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// fetchData();

// Async and Await
// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

// The word async in front of a function means that function will return a promise.
// To access the value from the promise, we will use the keyword await

const square = async (num) => num * num;
const result = await square(4);
// console.log(result);

// async and await data fetching

const fetchData = async () => {
  try {
    const jsonData = await fetch("https://restcountries.com/v2/all");
    const resData = await jsonData.json();
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
