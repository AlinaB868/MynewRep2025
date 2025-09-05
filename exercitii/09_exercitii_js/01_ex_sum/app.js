let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(
  "Suma numerelor mai mici de 100 care se impart la 3 si 5 este: ",
  sum
);
