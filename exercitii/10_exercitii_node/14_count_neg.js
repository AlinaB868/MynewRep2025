// Scrie o funcție numaraNegative(arr) care returnează câte elemente negative sunt în array-ul dat.

function numaraNegative(arr) {
  var neg = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      neg++;
    }
  }
  console.log("in array sunt " + neg + " numere neg");
}
numaraNegative([1, -1, 2, -2, 3, -3]);
