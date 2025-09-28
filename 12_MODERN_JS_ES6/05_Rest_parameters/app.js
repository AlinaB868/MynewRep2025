// Rest parameters - starter code
// TODO: Learn about rest parameters and implement examples

// Example:
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// TODO: Add your rest parameters examples here

// TODO: returnează suma tuturor numerelor
function sumAll(...nums) {
  var sumAll = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    sumAll = sumAll + nums[i];
  }
  return sumAll;
}
console.log(sumAll(10, 20, 30, 40));

// TODO: pentru fiecare nume, afișează "Hello, [nume]! [message]"
// Hello, Ana! Have a great day!
// Hello, Paul! Have a great day!
// Hello, Maria! Have a great day!
function greetAll(message, ...names) {
  names.forEach((name) => {
    console.log(`Hello, ${name}! ${message}`);
  });
}
greetAll("Have a great day!", "Ana", "Paul", "Maria");

// TODO: returnează doar valorile care sunt de tip 'number'

function getNumbers2(...values2) {
  for (let i = 0; i <= values2.length - 1; i++) {
    const val = values2[i];
    if (typeof val === "number" && Number.isFinite(val)) {
      console.log(val);
    }
  }
}
getNumbers2(2, "text", true, 42, "abc", 100);

// TODO: întoarce valoarea maximă
function maxValue(...nums) {
  let maxV = nums[0];
  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] > maxV) {
      maxV = nums[i];
    }
  }
  return maxV;
}

console.log(maxValue(10, 20, 3, 99, 2));
console.log(maxValue(10, 100));

// Scrie o funcție care primește un titlu și o listă de capitole, și afișează-le frumos.

// function bookContents(title, ...chapters) {
// TODO: Afișează titlul și fiecare capitol pe rând
// }

// bookContents("Modern JavaScript", "Intro", "Variables", "Functions");
// Output:
// Book: Modern JavaScript
// Chapter: Intro
// Chapter: Variables
// Chapter: Functions
