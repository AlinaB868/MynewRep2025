// Scrie o funcție existaNegative(arr) care returnează true dacă în array există cel puțin un număr negativ, altfel false.
function existaNeg(arr) {
  var neg = false;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      return true;
    }
  }
  return false;
}
console.log(existaNeg([2, 3, 2, 0, -1, 4]));
