function findElement(arr, target) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
}

console.log(findElement([2, 4, 6, 9, 12], 8));
