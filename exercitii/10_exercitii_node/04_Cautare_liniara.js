// Scrie un algoritm care caută un număr într-un array nesortat folosind Căutarea Liniară.
function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

var arr = [12, 1, 5, 36, 14, 28, 11];
var target = 14;

var result = linearSearch(arr, target);
if (result !== -1) {
  console.log("Elementul a fost găsit la indexul: " + result);
} else {
  console.log("Elementul nu a fost găsit.");
}
