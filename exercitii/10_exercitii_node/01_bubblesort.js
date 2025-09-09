function bubbleSort(arr) {
  var n = arr.length;
  for (var i = 0; i <= n - 1; i++) {
    for (var j = 0; j <= n - i - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr);
    }
  }
}

var arr = [5, 5, 3, 8, 1, 5, 3, 7, 3];
bubbleSort(arr);
console.log(arr);
