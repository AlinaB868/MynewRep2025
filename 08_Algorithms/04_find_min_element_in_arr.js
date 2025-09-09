function findMinElement(arr) {
  min = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log("Minimul este " + min);
    }
  }
}
findMinElement([2, 4, 1, 6, 7, 2, 6, 9, 111, 4637, 2485]);
