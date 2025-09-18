function eisPoli(str) {
  for (var i = 0; i <= str.length - 1; i++) {
    var litMari = str[i].toLowerCase();

    if (
      litMari === "a" ||
      litMari === "e" ||
      litMari === "i" ||
      litMari == "o" ||
      litMari == "u"
    ) {
      return true;
    }
  }

  return false;
}

console.log(eisPoli("cuc"));
console.log(eisPoli("cUc"));

// function existaVocale(str) {
//   for (var i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i].toLowerCase())) {
//       return true;
//     }
//   }
//   return false;
// }
