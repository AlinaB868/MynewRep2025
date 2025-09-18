function existaStr(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === "string") {
      return true;
    }
  }
  return false;
}
console.log(existaStr([2, 3, 2, 0, -1, 4]));
