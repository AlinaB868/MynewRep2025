// calculate sum of array elements
function calculateSumOfArr(arr) {
  var sum = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  console.log("Suma este " + sum);
}
calculateSumOfArr([2, 3, 4, 5, 6, 1]);
