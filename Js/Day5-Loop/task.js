// Develop a small script which generate array of 5 random numbers
let num = [];

for (let i = 0; i < 5; i++) {
  const randomNum = Math.round(Math.random() * 10) + 1;
  num.push(randomNum);
}
console.log(num);
