// Numără câte numere negative sunt într-un array și afișează rezultatul.

function f(arr) {
  var neg = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      neg++;
    }
  }
  console.log("Avem " + neg + " numere negative");
}
f([1, -1, 2, -2, 3, -3]);
