const TIMER = 10;
let MILLISECONDS = 0;
let seconds = 57;
let minutes = 0;

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
  // let n = 0;
  // let o = 9;
  // if (seconds <= o) {
  //   n += seconds;
  // }
  timerTarget.innerHTML = `${minutes}:${seconds}:${MILLISECONDS}`;
}
const countDown = setInterval(updateTimer, 10);
