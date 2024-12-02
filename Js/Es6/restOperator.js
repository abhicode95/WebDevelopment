// Unlimited number of parameters in arrow function
// Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use rest operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function.

//Let us access the arguments object

const sumOfNums = (...nums) => {
  console.log(nums);
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};
console.log(sumOfNums(1, 2, 3, 4, 5));
