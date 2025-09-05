var a;
var b = 10;
console.log(a);
console.log(b);
a = 20;
console.log(a);
console.log("a = ", a);
console.log("b = ", b);
// valori speciale
console.log(1 / 0);
console.log(-1 / 0);

// NaN
z = "10";
console.log(Number(z));
console.log(isNaN("z"));
console.log(isNaN("y"));
console.log(isNaN("10"));

const num1 = 10;
const num2 = 20;
if (num1 > num2) {
  console.log("Maximum = ", num1);
} else {
  console.log("Maximum = ", num2);
}

const num10 = 10;
const num20 = 20;
const num30 = 30;

if (num10 > num20 && num10 > num30) {
  console.log("Maximum = ", num10);
} else if (num20 > num10 && num20 > num30) {
  console.log("Maximum = ", num20);
} else {
  console.log("Maximum = ", num30);
}

var varsta = 18;
var poateConduce = varsta >= 18 ? "DA" : "NU";
console.log(poateConduce);
