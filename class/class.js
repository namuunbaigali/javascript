// class Triangle {
//   constructor(angleA, angleB) {
//     this.angleA = angleA;
//     this.angleB = angleB;
//     this.angleC = 180 + angleA - angleB;
//     this.name = "Triangle";
//   }
// }
// class Pyramid extends Triangle {
//   constructor() {
//     this.angleF = 180 + angleA - angleB;

//     super(80, 60);
//     this.name = "Pyramid";
//   }
// }
// const pyramid = new Pyramid();
// console.log(pyramid);

class Person {
  hair;
  constructor() {
    this.legs = 2;
    this.ears = 2;
    this.arm = 2;
    this.mouth = 1;
  }
}

class Student extends Person {
  constructor() {
    super();
    this.money = 0;
  }
}
const student = new Student();
console.log(student);
