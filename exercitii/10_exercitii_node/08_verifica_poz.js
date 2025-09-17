// Verifică dacă toate numerele dintr-un array sunt pozitive.
// Dacă da, afișează „Toate numerele sunt pozitive.”
// Dacă există măcar un număr negativ sau zero, afișează „Nu toate numerele sunt pozitive.”
function f(arr) {
  var poz = true;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      poz = false;
      break;
    }
  }
  if (poz == true) {
    console.log("toate nr sunt pozitive");
  } else {
    console.log("nu toate nr sunt pozitive");
  }
}

f([1, 2, 3, 4, -1]);
