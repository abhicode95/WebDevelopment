const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
// let maxSkill = 0;
// let skilledPerson;
// for (let user in users) {
//   const skillCount = users[user].skills.length;
//   if (skillCount > maxSkill) {
//     maxSkill = skillCount;
//     skilledPerson = user;
//   }
// }
// console.log(
//   `The person with the most skills is ${skilledPerson} with ${maxSkill} skills.`
// );

//2.Count logged in users.
// let logedCount = 0;
// for (let user in users) {
//   const userLogged = users[user].isLoggedIn;
//   if (userLogged) {
//     logedCount++;
//   }
// }
// console.log(logedCount);

//3.count users having greater than equal to 50 points from the following object

// let pointCount = 0;
// for (let user in users) {
//   const userPoints = users[user].points;
//   if (userPoints >= 50) {
//     pointCount++;
//   }
// }
// console.log(pointCount);

//4.Find people who are MERN stack developer from the users object

let mernPerson = [];
for (let user in users) {
  const skills = users[user].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  )
    mernPerson.push(user);
}
console.log("skilledPersons", mernPerson);
