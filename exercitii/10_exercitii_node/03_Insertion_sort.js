// Scrie un algoritm care sortează un array de stringuri în ordine alfabetică folosind Insertion Sort.
function insertionSort(arr) {
  var n = arr.length;
  for (var i = 0; i <= n - 1; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
var arr = ["mere", "pere", "prune", "cirese", "struguri", "banane", "ananas"];
insertionSort(arr);
console.log(arr);
