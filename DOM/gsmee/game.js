let score = 0;
const scoreTarget = document.querySelector("#scoreTarget");
function updateScore(point) {
  score += point;
  scoreTarget.innerHTML = score;
}
const parent = document.querySelector("ul");
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}
const titleCount = 9;

function getDifferentColor(colors) {
  const random = getRandomNumber(0, 2);
  const newColors = [...colors];
  let color = newColors[random];
  if (color > 126) {
    color -= 30;
  } else {
    color += 30;
  }
  newColors[random] = color;
  return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`;
}

function reDraw() {
  parent.innerHTML = "";
  const colors = getRandomColor();

  const randomIndex = getRandomNumber(0, 3);

  for (let i = 0; i < titleCount; i++) {
    const li = document.createElement("li");
    const isNormal = i !== randomIndex;
    console.log(colors);
    if (isNormal) {
      li.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    } else {
      li.style.backgroundColor = getDifferentColor(colors);
    }
    li.addEventListener("click", function () {
      if (!isNormal) {
        updateScore(1);
        reDraw();
      } else {
        updateScore(-2);
      }
    });
    parent.appendChild(li);
  }
}
reDraw();
