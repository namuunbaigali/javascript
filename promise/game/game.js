const puzzle = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 1, 2, 3],
  [4, 5, 6, 7],
];

let found = 0;
let flippedItems = function getTile(value) {
  const tile = document.createElement("li");
  const tileFront = document.createElement("div");
  tileFront.innerHTML = value;
  tileFront.classList.add("front");
  tile.appendChild(tileFront);

  const tileBack = document.createElement("div");
  tileBack.classList.add("back");
  tile.appendChild(tileBack);
  tile.addEventListener("click", function () {
    if (tile) {
      tile.classList.add("active");
      flippedItems.push(tile);
    }
    console.log(flippedItems);

    if (flippedItems.length >= 2) {
      flippedItems[2].classList.remove("active");
    }
  });
  return tile;
};

//darahaar hiih uildlee biciy

const gameTarget = document.querySelector("#gameTarget");
for (let row = 0; row < puzzle.length; row++) {
  const rowItems = puzzle[row];
  for (let col = 0; col < rowItems.length; col++) {
    gameTarget.appendChild(getTile(rowItems[col]));
  }
}
