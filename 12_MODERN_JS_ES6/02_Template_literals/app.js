// Template literals - starter code
// TODO: Learn about template literals and implement examples

// Example:
// const name = "John";
// const message = `Hello, ${name}!`;

// TODO: Add your template literal examples here

const name = "Maria";
const message = `Ma numesc ${name}`;
console.log(message);

const nume = "Ana";
const mesaj = `Salut, ${nume}!`;
console.log(mesaj);

const numele = (nume) => `Salut, ${nume}!`;
console.log(numele("Andreea"));

const suma = (a, b) => `Suma lui ${a} si ${b} este ${a + b}`;
console.log(suma(3, 4));

const numeA = "Mimi";
const vasrta = 35;
const mesaj2 = `Numele tau este ${numeA} si ai ${vasrta} ani`;
console.log(mesaj2);

const mesaj3 = (nume2, varsta) =>
  `Numele tau este ${nume2} si ai ${varsta} ani`;
console.log(mesaj3("Andreea", 10));
