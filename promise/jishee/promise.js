// const rawEgg = "tuuhi ondog";
// function cookEgg(rawEgg) {
//   const isForgetToFlip = false;
//   const prom = new Promise(function (reject, resolve) {
//     setTimeout(function () {
//       if (!isForgetToFlip) {
//         resolve("cooked egg");
//       } else {
//         reject("ha;f burnt egg");
//       }
//     }, 2000);
//   });
//   return Promise;
// }

// let result = rawEgg;
// cookEgg(rawEgg)
//   .then(function (res) {
//     result = res;
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
function getAnEgg() {
  const eggCount = 12;
  const promise = new Promise((resolve, reject) => {
    if (eggCount > 0) {
      setTimeout(() => {
        resolve("banhar");
      }, 1000);
    } else {
      reject("Run out of egg");
    }
  });
  return promise;
}

function pickAnPot() {
  const isPotInUse = false;
  const promise = new Promise((resolve, reject) => {
    if (!isPotInUse) {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    } else {
      reject("Pot is in use");
    }
  });
  return promise;
}

function fillWater() {
  const isWaterRunning = true;
  const promise = new Promise((resolve, reject) => {
    if (isWaterRunning) {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    } else {
      reject("No water");
    }
  });
  return promise;
}

function startStove() {
  const isStoveWorking = true;
  const promise = new Promise((resolve, reject) => {
    if (isStoveWorking) {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    } else {
      reject("Stove is not working");
    }
  });
  return promise;
}

function boilEgg() {
  const timer = 10;
  const promise = new Promise((resolve, reject) => {
    if (timer >= 10) {
      setTimeout(() => {
        resolve("Cooked egg");
      }, 3000);
    } else {
      reject("timer was too short got raw egg");
    }
  });
  return promise;
}

const cookedEgg = getAnEgg()
  .then((res) => {
    console.log(res);
    console.log("picked an egg");
    return pickAnPot();
  })
  .then((res) => {
    console.log(res);
    console.log("picked an pot");
    return fillWater();
  })
  .then((res) => {
    console.log(res);
    console.log("filled pot");
    return startStove();
  })
  .then((res) => {
    console.log(res);
    console.log("started stove");
    return boilEgg();
  })
  .then((res) => {
    console.log("boiled an egg");
    return console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
