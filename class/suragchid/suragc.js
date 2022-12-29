class Student {
  average;
  constructor(name, birthYear, weight, height) {
    this.name = name;
    this.birthYear = birthYear;
    this.weight = weight;
    this.height = height;
  }
  getBMI() {
    return this.weight / this.height ** 2;
  }
  getAge() {
    return new Date().getFullYear - this.birthYear;
  }
}

const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

const thisYear = new Date().getFullYear();
const students = [];

for (let i = 0; i <= 2; i++) {
  const student = new Student(
    "Student" + i,
    generateNumber(1970, thisYear),
    generateNumber(40, 90),
    generateNumber(155, 190)
  );
  students.push(student);
}
console.log(students);

let average = 0;

for (let i = 0; i <= students.length; i++) {
  average = average + students[i].getBMI() / students.length;
}
console.log(average);
// let averageBMI;
// let averageAge;
// let studentWithMaxBMI;
// let studentWithMinBMI;
// let youngest;
// let oldest;
