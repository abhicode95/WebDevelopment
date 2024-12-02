// Everything can be an object and objects do have properties and properties have values, so an object is a key value pair.

// Creating an empty object
// An empty object

// const person = {}

// Creating an objecting with values

// const rectangle = {
//   length: 20,
//   width: 20,
// };
// console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Abhi",
  lastName: "Kumar",
  age: 29,
  country: "India",
  city: "Patna",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isWorking: true,
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
};
// console.log(person);

// Getting values from an object
// We can access values of object using two methods:

// using . followed by key name if the key-name is a one word
// using square bracket and a quote

// // accessing values using .
// console.log(person.firstName);
// console.log(person.location); // undefined

// // value can be accessed using square bracket and key name

// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["location"]); // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person["phone number"]);

// Creating object methods
// The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.

// Setting new key for an object
// An object is a mutable data structure and we can modify the content of an object after it gets created.

person.nationality = "Ethiopian";
// console.log("Person:", person);

// Object Methods
// There are different methods to manipulate an object.

// 1.Object.assign: To copy an object without modifying the original object
const copiedPerson = Object.assign({}, person);
// console.log("Person:", copiedPerson);

//2.Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

// const personKeys = Object.keys(person);
// console.log("Person:", personKeys);

//3.Getting object values using Object.values()
// Object.values:To get values of an object as an array

// const personKeys = Object.values(person);
// console.log("Person:", personKeys);

//4.Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array

// const personKeys = Object.entries(person);
// console.log("Person:", personKeys);

//5.Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object

const personKeys = Object.hasOwn(person, "firstName");
console.log("Person:", personKeys);
