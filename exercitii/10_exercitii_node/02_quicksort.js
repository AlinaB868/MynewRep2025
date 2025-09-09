function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[arr.length - 1];
  var maiMic = [];
  var maiMare = [];
  for (var i = 0; i <= arr.length - 2; i++) {
    if (arr[i] < pivot) {
      maiMic.push(arr[i]);
    } else {
      maiMare.push(arr[i]);
    }
  }
  return [...quickSort(maiMic), pivot, ...quickSort(maiMare)];
}
var arr = [2, 7, 5, 6, 3, 2, 0, 9, 1];
var sortedArr = quickSort(arr);
console.log(sortedArr);
