const TIMER = 10;
let MILLISECONDS = 0;
let seconds = 55;
let minutes = 0;
let hours = 0;

const timerTarget = document.querySelector("h5");
let count = 0;
function updateTimer() {
  count++;
  MILLISECONDS++;
  if (MILLISECONDS == 100) {
    seconds++;
    MILLISECONDS = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  timerTarget.innerHTML = `${hours}:${minutes}:${seconds}:${MILLISECONDS}`;
}
const countDown = setInterval(updateTimer, 1000);
