const puzzle = [
  [8, 7, 0],
  [6, 5, 4],
  [2, 1, 3],
];

let zeroX = 0,
  zeroY = 2;

const swapTiles = (clickedX, clickedY) => {
  const temp = Number(puzzle[clickedX][clickedY]);
  puzzle[clickedX][clickedY] = 0;
  puzzle[zeroX][zeroY] = temp;
  zeroX = clickedX;
  zeroY = clickedY;
};

const checkWin = () => {
  const flattedArray = puzzle.flat(1);
  for (let i = 0; i < flattedArray.length - 1; i++) {
    if (flattedArray[i] !== i + 1) {
      return false;
    }
  }
  return true;
};

const createTile = (val, x, y) => {
  const tileNode = document.createElement("div");
  tileNode.classList.add("tile");
  tileNode.setAttribute("x", x);
  tileNode.setAttribute("y", y);

  if (val !== 0) {
    tileNode.style.backgroundImage = `url('./puzzle01/0${val}.jpg')`;
  }

  tileNode.addEventListener("click", (e) => {
    const clickedX = Number(e.target.getAttribute("x"));
    const clickedY = Number(e.target.getAttribute("y"));
    const ydiff = Math.abs(clickedY - zeroY);
    const xdiff = Math.abs(clickedX - zeroX);
    console.log(clickedX);
    console.log(clickedY);

    if (ydiff + xdiff === 1) {
      swapTiles(clickedX, clickedY);
      drawTiles();
      if (checkWin()) {
        setTimeout(() => {
          alert("You win");
        }, 200);
      }
    }
  });

  return tileNode;
};

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const drawTiles = () => {
  wrapper.innerHTML = "";
  let i = 0;
  for (let rowItems of puzzle) {
    let j = 0;
    for (let colItems of rowItems) {
      const tile = createTile(colItems, i, j);
      wrapper.appendChild(tile);
      j++;
    }
    i++;
  }
};

drawTiles();
