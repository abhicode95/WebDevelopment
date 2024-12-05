// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];
// console.log(wholeNumbers);

// Spread operator to copy object
// We can copy an object using a spread operator

// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
// };

// const copiedUser = { ...user };
// console.log(copiedUser);

// Modifying or changing the object while copying

// const copiedUser = { ...user, country: "England" };
// console.log(copiedUser);

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//1.Iterate through the users array and get all the keys of the object using destructuring

const userKey = users.map((user) => {
  return Object.keys(user);
});
// console.log(userKey);

//2.Find the persons who have less than two skills

// const person = users.filter((user) => user.skills.length < 2);
// console.log(person);

//3,Write a function called convertArrayToObject which can convert the array to a structure object.
// const students = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ];

// const convertArrayToObject = (students) => {
//   const newArr = students.map(([name, skill, scores]) => {
//     return {
//       name,
//       skill,
//       scores,
//     };
//   });
//   return newArr;
// };

// console.log(convertArrayToObject(students));

//4

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = { ...student };
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");
console.log(newStudent);
