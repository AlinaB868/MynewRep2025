function posNegZero(arr) {
  var pos = 0;
  var neg = 0;
  var zero = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      neg++;
    } else if (arr[i] > 0) {
      pos++;
    } else {
      zero++;
    }
  }
  console.log(
    "Array-ul contine " +
      neg +
      " numere negative, " +
      pos +
      " numere pozitive si " +
      zero +
      " zerouri"
  );
}

posNegZero([0, 1, 0, 2, -2, -2, 0, 11, 12]);
