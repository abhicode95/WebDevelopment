const prompt = require("prompt-sync")({ sigint: true });

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// const userAge = Number(prompt("Enter your age :"));

// if (userAge >= 18) {
//   console.log(`You are old enough to drive`);
// } else {
//   console.log(`wait for ${18 - userAge} years to turn 18`);
// }

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// const scores = Number(prompt("Enter your score : "));
// let grade;
// if (scores >= 80 && scores <= 100) {
//   grade = "A";
// } else if (scores >= 70 && scores <= 89) {
//   grade = "B";
// } else if (scores >= 60 && scores <= 69) {
//   grade = "C";
// } else if (scores >= 50 && scores <= 59) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// console.log("Grade Obtained:", grade);

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// const season = prompt("Enter your season : ");
// if (season === "September" || season === "October" || season === "November") {
//   console.log("Autumn");
// } else if (
//   season === "December" ||
//   season === "January" ||
//   season === "February"
// ) {
//   console.log("Winter");
// } else if (season === "March" || season === "April" || season === "May") {
//   console.log("Spring");
// } else {
//   console.log("Summer");
// }

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// const day = prompt("Enter your day :");
// if (day === "Sat" || day === "Sun") {
//   console.log(`${day} is a weekend`);
// } else {
//   console.log(`${day} is a working day`);
// }

// Write a program which tells the number of days in a month, now consider leap year.
let month = prompt("Enter a month: ");
let year = parseInt(prompt("Enter a year: "));
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${month} has 31 days in ${year}.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} has 30 days in ${year}.`);
    break;
  case "February":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${month} has 29 days in ${year}.`);
      break;
    } else {
      console.log(`${month} has 28 days in ${year}.`);
      break;
    }
  default:
    alert("Please enter a valid month name!");
}
