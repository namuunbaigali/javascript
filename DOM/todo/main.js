const todoTarget = document.querySelector("#todoTarget");
const testTarget = document.querySelector("#testTarget");
const inputTarget = document.querySelector("#inputTarget");
const ul = document.querySelector("#ul");

inputTarget.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const li = document.createElement("li");
    li.innerHTML = `<input id='check' type="checkbox"> ${e.target.value} <input id="button" type="button" value="x">`;
    ul.append(li);
    console.log(e.target.value);
  }
});

const checkbox = document.querySelector("#check");
checkbox.addEventListener("click", function (e) {
  if (click) {
  }
  console.log(e);
});
