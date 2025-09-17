// 🔷 Verifică dacă există cel putin 2 numere negative consecutive în array.
// Dacă da: Exista cel putin 2 numere negative consecutive
// Dacă nu: Nu exista cel putin 2 numere negative consecutive
function f(arr) {
  var countNegConsec = false;
  for (var i = 0; i <= arr.length - 2; i++) {
    if (arr[i] < 0 && arr[i + 1] < 0) {
      countNegConsec = true;
      break;
    }
  }
  if (countNegConsec == true) {
    console.log("Exista cel putin 2 numere negative consecutive");
  } else {
    console.log("Nu exista cel putin 2 numere negative consecutive");
  }
}
f([1, -2, -3, 1]);
