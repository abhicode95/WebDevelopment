// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

// const outerFunction = () => {
//   let count = 0;
//   const innerFunction = () => {
//     count++;
//     return count;
//   };
//   return innerFunction;
// };

// const result = outerFunction();
// console.log(result());
// console.log(result());
// console.log(result());

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
