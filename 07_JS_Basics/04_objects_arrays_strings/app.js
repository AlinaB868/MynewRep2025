var masina = {
  marca: "Skoda",
  model: "Fabia",
  anFabricatie: 2015,
  kmParcursi: 164000,
};

console.log(masina.anFabricatie);
console.log(masina.model);

function showInputValue() {
  var myInput = document.getElementById("my-input");
  console.log(myInput);
  console.log(myInput.type);
  console.log(myInput.id);
  console.log(myInput.value);
}

function calculeazaSuma() {
  var primulNumar = Number(document.getElementById("first-number").value);
  var alDoileaNumar = Number(document.getElementById("second-number").value);
  var suma = primulNumar + alDoileaNumar;
  document.getElementById("output").innerHTML =
    "Suma dintre " + primulNumar + " si " + alDoileaNumar + " este " + suma;
}

var numbers = [6, 2, 7, 8, 9];
// 5 elem de la 0-4

console.log(numbers[4]);
