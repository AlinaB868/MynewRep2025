// 🔷 Verifică dacă există exact 2 numere negative în array.
// Dacă da: Exista exact 2 numere negative
// Dacă nu: Nu exista exact 2 numere negative
function f(arr) {
  var countNeg = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      countNeg++;
    }
  }
  if (countNeg == 2) {
    console.log("Exista exact 2 nr neg");
  } else {
    console.log("Nu exista exact 2 nr neg");
  }
}
f([1, -2, 3, -1]);
