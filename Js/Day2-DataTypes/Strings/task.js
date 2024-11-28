//1.Access the 'JavaScript' string characters using a random number.

// let string = "JavaScript";
// let result = string.charAt(Math.round(Math.random() * string.length - 1));
// console.log(result);

//2.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let string =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let result = string.match(/love/gi).length;
console.log(result);
