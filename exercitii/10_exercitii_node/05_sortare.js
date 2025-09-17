// aranjare crescator
function sortCrescator(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.log(arr);
}
sortCrescator([3, 1, 5, 2, 8, 7, 4]);
