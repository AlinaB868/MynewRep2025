function replaceNegative(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      arr[i] = -arr[i];
    }
    console.log(arr[i]);
  }
}
console.log(replaceNegative([-2, 4, -4, 9, -12, -14]));
