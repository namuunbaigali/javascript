// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
//  Сурагчдын насны дунджийг олох
// функц бичих
//  Сурагчидад овог нэмж оруулах
// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх
let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
function getCountByGender(list, gender) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].gender === gender) {
      count++;
    }
  }
  return count;
}
const femaleCount = getCountByGender(students, "female");
const maleCount = getCountByGender(students, "male");

console.log(`Нийт ${femaleCount} эмэгтэй,${maleCount} эрэгтэй байна.`);

//  Сурагчдын насны дунджийг олох функц бичих
function getCountByAge(nas) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    count += students[i].age;
  }
  return count / students.length;
}

let x = getCountByAge(students);
console.log(x);

//  Сурагчидад овог нэмж оруулах
