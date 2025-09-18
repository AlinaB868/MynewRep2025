function ePoz(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= 0) {
      return false;
    }
  }
  return true;
}
console.log(ePoz([1, 2, 0, 7, 2]));
