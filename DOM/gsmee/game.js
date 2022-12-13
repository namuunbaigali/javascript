// let isTimeOut = false;

// let seconds = 0;
// let minutes = 0;

// function updateTimer() {
//   seconds += 1;
//   if (seconds === 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   console.log(`${seconds},${minutes}`);
// }
// setInterval(updateTimer, 1000);

// let time = 0;
// const timer = document.querySelector("#timer");
// function updateTimer(times) {
//   time += times;
//   timer.innerHTML = time;
// }

let SCORE = 0;
const TITLE_COUNT = 9;
const TIMER = 2;
let MILLISECONDS = 0;
let SECONDS = TIMER;
let isGameOver = false;

const scoreTarget = document.querySelector("#scoreTarget");
const parent = document.querySelector("ul");
const timerTarget = document.querySelector("#timer");
const gameOverScreen = document.querySelectorAll(".game-over-screen")[0];

function gameOver() {
  console.log(gameOverScreen.classList.add("active"));
  isGameOver = true;
}
// functiongameOver(){
//   alert('Your game is over you scored:'+SCORE);
//   isGameOver=true;
// }
function updateTimer() {
  if (MILLISECONDS <= 0) {
    SECONDS--;
    MILLISECONDS = 990;
  }
  MILLISECONDS -= 10;

  if (MILLISECONDS <= 0 && SECONDS <= 0) {
    clearInterval(countDown);
    gameOver();
  }

  let timerResult = "";
  if (SECONDS < 10) {
    timerResult += "0";
  }
  timerResult += SECONDS;
  timerResult += ":";
  if (MILLISECONDS < 100) {
    timerResult + "0";
  }
  if (MILLISECONDS < 10) {
    timerResult + "0";
  }
  timerResult += MILLISECONDS;

  timerTarget.innerHTML = timerResult;
}
const countDown = setInterval(updateTimer, 10);

function updateScore(point) {
  SCORE += point;
  scoreTarget.innerHTML = SCORE;
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}

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

  const randomIndex = getRandomNumber(0, TITLE_COUNT - 1);

  for (let i = 0; i < TITLE_COUNT; i++) {
    const li = document.createElement("li");
    const isNormal = i !== randomIndex;
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

// setTimeout(function () {
//   isTimeOut = true;
// }, 10000);
// function running() {
//   console.log("Running");
// }
// console.log("start");
// // aryn seconds ni millseconds baidag 10iin hasah 3 zeregt
// setTimeout(running, 2000);

// console.log("End");
