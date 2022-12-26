const sudoku = [
  [5, 0, 9, 0, 0, 0, 4, 0, 0],
  [7, 0, 8, 3, 0, 9, 0, 0, 0],
  [6, 0, 1, 0, 0, 0, 7, 3, 0],
  [4, 6, 2, 5, 0, 0, 0, 0, 0],
  [3, 8, 5, 7, 2, 0, 6, 4, 9],
  [1, 0, 7, 4, 0, 8, 2, 0, 0],
  [2, 0, 0, 1, 0, 0, 0, 0, 4],
  [0, 0, 3, 0, 4, 0, 0, 8, 7],
  [0, 7, 0, 0, 5, 3, 0, 0, 6],
];
const tableTarget = document.querySelector("#tableTarget");
const tbody = document.createElement("tbody");

let chosenTd;

for (let row = 0; row < sudoku.length; row++) {
  const cols = sudoku[row];
  const tr = document.createElement("tr");
  for (let col = 0; col < cols.length; col++) {
    const td = document.createElement("td");
    td.className = "default";
    td.innerHTML = cols[col];
    if (cols[col !== 0]) {
      td.innerHTML = cols[col];
    } else {
      td.addEventListener("click", function (e) {
        chosenTd = e.target;
        console.log(chosenTd);
      });
    }
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
tableTarget.appendChild(tbody);

const validkeys = "0123456789";

document.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (validkeys.includes(key)) {
    if (key === "0") {
      chosenTd.innerHTML = "";
    }
  } else {
    chosenTd.innerHTML = key;
  }
});
