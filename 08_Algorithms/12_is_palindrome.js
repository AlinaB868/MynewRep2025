// verifica daca un string e polindrome
function isPalindrome(str) {
  var left = 0;
  var right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("ana"));
console.log(isPalindrome("capac"));
console.log(isPalindrome("mere"));
console.log(isPalindrome("radar"));
