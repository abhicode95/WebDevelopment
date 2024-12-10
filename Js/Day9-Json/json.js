// JSON stands for JavaScript Object Notation
// JSON format is text or string only.
// JSON is mostly used when data is sent from a server to a client.

// The difference is the key of a JSON object should be with double quotes or it should be a string.

// {
// "users":[
//   {
//     "firstName":"Asabeneh",
//     "lastName":"Yetayeh",
//     "age":250,
//     "email":"asab@asb.com"
//   },
//   {
//     "firstName":"Alex",
//     "lastName":"James",
//     "age":25,
//     "email":"alex@alex.com"
//   },
//   {
//   "firstName":"Lidiya",
//   "lastName":"Tekle",
//   "age":28,
//   "email":"lidiya@lidiya.com"
//   }
// ]
// }

// *********************************************Converting JSON to JavaScript Object
// In JavaScript the keyword JSON has parse() and stringify() methods. When we want to change the JSON to an object we parse the JSON using JSON.parse(). When we want to change the object to JSON we use JSON.stringify()

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText);
const userJson = JSON.stringify(usersObj);
console.log(usersObj);
console.log(userJson);
