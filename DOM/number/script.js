
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function too() {
const too = document.getElementsByClassName("guess");
    return 'too opuulna uu';
  }
  function getDifferentNumber(number) {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = newColors[random];
    if (color > 126) {
      color -= 100;
    } else {
      color += 100;
    }
    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
  }
    // let n = Math.floor(Math.random());
    // console.log(n);

    // do {
    //   let a = getElementsByClassName( );
    //   if (a < n) {
    //     console.log("baga baina");
    //   } else if (a > n) {
    //     console.log("ih baina");
    //   }
    //   a = prompt("dahiad opulnuu");
    //   if (a == n) {
    //     console.log("taalaa");
    //   }
    // } while (a != n);

