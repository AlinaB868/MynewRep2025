// find max index
function findIndex(arr) {
  var max = arr[0];
  var maxIndex = 0;
  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  console.log("Max index este " + maxIndex);
}

findIndex([1, 4, 23, 122, 33, 1, 651, 1]);
