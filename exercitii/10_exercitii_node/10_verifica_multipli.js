// Verifică dacă array-ul conține cel puțin un număr multiplu de 3.
// Afișează:
// Exista multipli de 3
// Nu exista multipli de 3

function f(arr) {
  var multipluTrei = false;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 3 == 0) {
      multipluTrei = true;
      break;
    }
  }
  if (multipluTrei == true) {
    console.log("Exista multipli de 3");
  } else {
    console.log("Nu exista multipli de 3");
  }
}
f([1, 4, 5]);
