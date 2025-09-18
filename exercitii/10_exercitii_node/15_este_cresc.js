// Scrie o funcție esteCrescator(arr) care returnează true dacă toate elementele sunt în ordine crescătoare (sau egale), altfel false.
function eCresc(arr) {
  for (var i = 0; i <= arr.length - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(eCresc([2, 4, 6]));
