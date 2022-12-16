document.getElementsByClassName('guess'){
    let n = Math.floor(Math.random() * 100) + 1;
    console.log(n);

    do {
      let a = prompt("100 dotoph toogoo opuulna uu");
      if (a < n) {
        console.log("baga baina");
      } else if (a > n) {
        console.log("ih baina");
      }
      a = prompt("dahiad opulnuu");
      if (a == n) {
        console.log("taalaa");
      }
    } while (a != n);
}