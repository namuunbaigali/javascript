// scroll progress
//
//
let windowHeight = window.innerHeight;
let documentHeight = document.body.offsetHeight;
let targetScrollY = documentHeight - windowHeight;

function getScrollTopPercent() {
  return Math.round((window.scrollY * 100) / targetScrollY);
}

function updateScrollProgress() {
  document.querySelector(".progress").innerHTML = getScrollTopPercent() + "%";
  document.querySelector(".progress-bar-inner").style.width =
    getScrollTopPercent() + "%";
}

document.addEventListener("scroll", updateScrollProgress);

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  documentHeight = document.body.offsetHeight;
  targetScrollY = documentHeight - windowHeight;
});

const runBoxtarget = document.querySelector(".runbox");

runBoxtarget.addEventListener("mouseenter", function () {
  runBoxtarget.classList.add("active");
});
runBoxtarget.addEventListener("mouseout", function () {
  runBoxtarget.classList.remove("active");
});
