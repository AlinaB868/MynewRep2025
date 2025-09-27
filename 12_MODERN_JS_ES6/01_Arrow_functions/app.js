// Arrow functions - starter code
// TODO: Learn about arrow functions and implement examples

// Traditional function
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));

// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));
console.log(add(7, 3));

// TODO: Add your arrow function examples here
const product = (a, b, c) => a * b * c;
console.log(product(3, 10, 10));
console.log(product(13, 11, 45));

const mysquareEx = (a) => a * a;
console.log(mysquareEx(5));

const isEven = (a) => a % 2 === 0;
console.log(isEven(5));
console.log(isEven(4));

const firstChar = (str) => str[0];
console.log(firstChar("hello"));

const totalLength = (a, b) => (a + b).length;
console.log(totalLength("hello", "a"));

const media = (a, b, c) => (a + b + c) / 3;
console.log(media(10, 20, 30));

const contineA = (str) => str.includes("a");
console.log(contineA("mama"));
console.log(contineA("nume"));

const maiMare = (a, b) => "Mai mare este: " + (a > b ? a : b);
console.log(maiMare(3, 4));

const verificaNr = (a) => (a > 0 ? "Pozitiv" : a < 0 ? "Negativ" : "Zero");
console.log(verificaNr(2));
console.log(verificaNr(-2));
console.log(verificaNr(0));

const comparaNume = (a, b) => (a === b ? "Au acelasi nume" : "Nume diferite");
console.log(comparaNume("Ana", "Ana"));
console.log(comparaNume("Ana", "Maria"));

// Scrie o funcție care primește un string și returnează:
// "E lung" dacă are mai mult de 10 caractere, altfel "E scurt".

const cumE = (str) => (str.length > 10 ? "E lung" : "E scurt");
console.log(cumE("Maria merge la munca"));
console.log(cumE("Maria"));

// 4. Scrie o funcție care primește un număr și returnează:
// "Par" dacă e par, "Impar" dacă e impar
// (este ca isEven, dar returnează text)

const ePar = (a) => (a % 2 === 0 ? "Par" : "Impar");
console.log(ePar(4));
console.log(ePar(5));
