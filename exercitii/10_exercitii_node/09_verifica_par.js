// Verifică dacă toate elementele dintr-un array sunt pare.
// Dacă da, afișează: Toate sunt pare.
// Dacă nu, afișează: Nu toate sunt pare.

function f(arr) {
  var par = true;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 !== 0) {
      par = false;
      break;
    }
  }
  if (par == true) {
    console.log("Toate sunt pare");
  } else {
    console.log("Nu toate sunt pare");
  }
}
f([2, 4, 8, 6]);
