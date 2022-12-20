const arr = [2, 45, 67, 87, 12, 85, 98];

function clone(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const cloned = clone(arr, (n) => {
  return n + 3;
});
console.log("arr is:", arr);
console.log("clone is :", cloned);
