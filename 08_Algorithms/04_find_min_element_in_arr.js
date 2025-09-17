function findMinElement(arr) {
  if (arr.length === 0) {
    console.log("Array-ul este gol. Nu există minim.");
    return;
  }
  var min = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Minimul este " + min);
}
findMinElement([]);
