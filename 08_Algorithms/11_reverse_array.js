function reverseArray(arr) {
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    var tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
}
var arr = [1, 3, 5, 2, 6];
console.log(arr);
reverseArray(arr);
console.log(arr);
