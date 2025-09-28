// Spread operator - starter code
// TODO: Learn about spread operator and implement examples

// Array spread example:
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];

// Object spread example:
// const obj1 = { name: "John" };
// const obj2 = { ...obj1, age: 30 };

// TODO: Add your spread operator examples here

const fruits = ["apple", "banana", "orange"];
const copyF = [...fruits];
console.log(copyF);

// TODO: Creează un nou array numit 'fullStack' care să conțină toate elementele
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];
const fullStack = [...frontend, ...backend];
console.log(fullStack);

// TODO: Creează un nou obiect numit 'userClone' care să fie o clonă a lui 'user'
// apoi modifică vârsta în clonă la 30, dar fără să schimbi obiectul original.
const user = {
  name: "Ana",
  age: 25,
};
const userClone = { ...user, age: "30" };
console.log(userClone);

// TODO: Creează un nou obiect care să conțină toate proprietățile lui 'car',
// plus una nouă: color: 'red'
const car = {
  brand: "Toyota",
  year: 2018,
};

const carNou = { ...car, color: "red" };
console.log(carNou);

// TODO: Apelează funcția `sum` folosind spread operator și array-ul 'numbers'.
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [5, 10, 15];
console.log(sum(...numbers));

// TODO: Creează un nou array care să conțină toate culorile, DAR fără 'green'.
// Folosește `spread` și `filter`, fără să modifici array-ul original.
const colors = ["red", "green", "blue", "yellow"];
colors2 = colors.filter((n) => n !== "green");
console.log(colors2);
