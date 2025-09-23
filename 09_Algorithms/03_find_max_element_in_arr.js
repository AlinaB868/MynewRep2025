// gaseste maximul dintr-un element
function findMaxElemenntInArr(arr) {
  if (arr.length === 0) {
    console.log("Array-ul este gol. Nu exista maxim.");
    return;
  }
  var max = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Maximul este " + max);
}
findMaxElemenntInArr([2, 5, 1, 6, 2, 9, 7, 10, 3, -9, 200, 1265, 13]);
