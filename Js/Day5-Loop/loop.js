// In programming languages to carry out repetitive task we use different kinds of loops.

// 1.for Loop
// // For loop structure
// for(initialization, condition, increment/decrement){
//   // code goes here
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//convert countries to uppercase
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// const newCont = [];
// for (let i = 0; i <= countries.length - 1; i++) {
//   newCont.push(countries[i].toUpperCase());
// }
// console.log(newCont);

// Adding all elements in the array
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

//2.while loop

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// 0 1 2 3 4 5

//3.do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// // 0 1 2 3 4 5

//4.for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//   // code goes here
// }

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// console.log(sum);

//5.break
// Break is used to interrupt a loop.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2

//6.continue
// We use the keyword continue to skip a certain iterations.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
