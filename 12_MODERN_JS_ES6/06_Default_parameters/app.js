// Default parameters - starter code
// TODO: Learn about default parameters and implement examples

// Example:
// function greet(name = "World") {
//     return `Hello, ${name}!`;
// }

// TODO: Add your default parameters examples here

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("Ana");

// Scrie o funcție multiply care primește doi parametri a și b. Parametrul b trebuie să aibă valoarea default 1. Funcția returnează produsul lui a și b.

function multiply(a = 0, b = 1) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(4, 3));

// Creează o funcție greetUser care primește 2 parametri: name și message.
// Dacă message nu este oferit, să fie "Welcome!". Funcția trebuie să afișeze un mesaj în formatul: "Hello, [name]! [message]".
function greetUser(name = "Guest", message = "Welcome!") {
  console.log(`Hello, ${name}! ${message}`);
}
greetUser("Paul"); // Hello, Paul! Welcome!
greetUser("Maria", "Good job!"); // Hello, Maria! Good job!

// Creează o funcție calculatePrice care primește doi parametri: price și tax (default 0.19 pentru 19%). Funcția să returneze prețul final după aplicarea taxei.
function calculatePrice(price = 0, tax = 0.19) {
  return price + 100 * tax;
}

console.log(calculatePrice(100)); // 119
console.log(calculatePrice(100, 0.05)); // 105

// Scrie o funcție showCourses care primește: un nume de student, un array de cursuri (default: ["HTML", "CSS"])
// Funcția trebuie să afișeze: Student Ana is enrolled in: HTML, CSS
function showCourses(nume = "Guest", curs = ["HTML", "CSS"]) {
  console.log(`Student ${nume} is enrolled in: ${curs}`);
  //   console.log(`Student ${nume} is enrolled in: ${curs.join(", ")}`);
}
showCourses("Ana"); // Student Ana is enrolled in: HTML, CSS
showCourses("Paul", ["JavaScript", "React"]); // Student Paul is enrolled in: JavaScript, React
