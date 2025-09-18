// Scrie o funcție mediaPozitive(arr) care returnează media (average) numerelor pozitive dintr-un array. Dacă nu există, returnează 0.

function mA(arr) {
  var poz = false;
  var nrPoz = 0;
  var suma = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
      nrPoz++;
      poz = true;
      suma += arr[i];
    }
  }
  if (poz == true) {
    var media = suma / nrPoz;
    console.log(media);
  } else {
    return 0;
  }
}

mA([1, 2, 3, 4, 6, -1]);
