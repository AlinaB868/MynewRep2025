// afiseaza elementele array innversat
function showArrayElementsReversed(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
showArrayElementsReversed([3, 2, -1, 0, 9, 7, 8]);
