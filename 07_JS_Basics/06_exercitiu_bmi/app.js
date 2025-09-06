var inputGreutate = document.getElementById("greutate");
var inputInaltime = document.getElementById("inaltime");
var paragrafRezultat = document.getElementById("rezultat");
function calculeazaBmi() {
  var greutateG = Number(inputGreutate.value);
  var inaltimeI = Number(inputInaltime.value);
  var indiceBMI = greutateG / (inaltimeI * inaltimeI);

  if (indiceBMI < 18.5) {
    paragrafRezultat.innerHTML =
      "IMC =" +
      indiceBMI +
      " Aceasta valoare indica riscuri pentru sanatatea ta...";
  } else if (indiceBMI > 18.5 && indiceBMI < 24.99) {
    paragrafRezultat.innerHTML = "IMC =" + indiceBMI + " Greutate normala";
  } else if (indiceBMI > 25 && indiceBMI < 29.99) {
    paragrafRezultat.innerHTML = "IMC =" + indiceBMI + " Supraponderal";
  } else if (indiceBMI > 30 && indiceBMI.toFixed < 34.99) {
    paragrafRezultat.innerHTML = "IMC =" + indiceBMI + " Obezitate grad 1";
  } else {
    paragrafRezultat.innerHTML = "IMC =" + indiceBMI + " Obezitate grad 2";
  }
}
