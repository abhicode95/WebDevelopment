// In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.

// The methods we use to get date and time information from a date object values are started with a word "get" because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

// Creating a time object

// The time object will provide information about time.

// const now = new Date();
// console.log("now", now);

//Getting full year
// console.log(now.getFullYear());

//Getting month
// console.log(now.getMonth());month(0 - 11);

//Getting Date
// console.log(now.getDate());

//Getting Day
// console.log(now.getDay());

//Getting Hours
// console.log(now.getHours());

//Getting Minutes
// console.log(now.getMinutes());

//Getting seconds
// console.log(now.getSeconds());

//Getting time
// Using getTime()
// console.log(now.getTime());

// Using Date.now()
// console.log(Date.now());

// Create a human readable time format using the Date time object

const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
