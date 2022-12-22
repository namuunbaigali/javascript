//  Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.
// Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.
// Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.
// Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.
// Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх

const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
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
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
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
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];
//  Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.
console.log(users[0]);
// Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.
function getCountBySkill(list, skills) {
  for (let i = 0; i < list.length; i++) {}
  return count;
}

const skills = getCountBySkill(users, "skills");
console.log(skills.length);
//  const maleCount = getCountByGender(data, "m");
