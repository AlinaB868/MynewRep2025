// Destructuring - starter code
// TODO: Learn about destructuring and implement examples

// Array destructuring example:
// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;

// Object destructuring example:
// const person = { name: "John", age: 30 };
// const { name, age } = person;

// TODO: Add your destructuring examples here

const persoana = { nume: "Ana", varsta: 30 };
const { nume, varsta } = persoana;
console.log(nume, varsta);

const culori = { c1: "rosu", c2: "verde", c3: "albastru" };
const { c1, c2, c3 } = culori;
console.log(c1, c3);

const carte = { titlu: "Ion", autor: "Liviu Rebreanu" };
const { titlu, autor } = carte;
console.log(titlu);

const persoana1 = {
  nume1: "Ion",
  varsta1: 30,
  oras1: "Cluj",
};
const { nume1, varsta1, oras1 } = persoana1;
const numePersoana = nume1;
const ani = varsta1;
const tara = "Ro";
console.log(numePersoana);
console.log(ani);
console.log(tara);

// const numere = [10, 20, 30, 40, 50];
// Vreau să extragi primele două numere în variabile separate și restul într-un array nou numit rest.
const numere = [10, 20, 30, 40, 50];
const [a, b, ...rest] = numere;

console.log(a, b);
console.log(rest);

const produs = {
  denumire: "Laptop",
  pret: 3500,
  stoc: 12,
};
const afiseazaProdus = ({ denumire, pret, stoc }) => {
  return `Produsul ${denumire} costă ${pret} RON și mai sunt ${stoc} bucăți pe stoc.`;
};

console.log(afiseazaProdus(produs));

// "Nota 1 este X, nota 2 este Y, nota 3 este Z"
// afiseazaNote([7, 9, 10]);

const afiseazaNote = ([n1, n2, n3]) => {
  return `Nota 1 este ${n1}, nota 2 este ${n2}, nota 3 este ${n3}`;
};

console.log(afiseazaNote([7, 9, 10]));
