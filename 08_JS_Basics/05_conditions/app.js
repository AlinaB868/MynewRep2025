var inputCapacitateCIlindrica = document.getElementById(
  "capacitate-cilindrica"
);
var paragrafRezultat = document.getElementById("rezultat");
function calculeazaImpozit() {
  var impozitAuto = 0;
  var capacitateCilindricaAuto = Number(inputCapacitateCIlindrica.value);
  if (capacitateCilindricaAuto <= 1600) {
    impozitAuto = (capacitateCilindricaAuto / 200) * 10;
  } else if (
    capacitateCilindricaAuto > 1600 &&
    capacitateCilindricaAuto <= 2000
  ) {
    impozitAuto = (capacitateCilindricaAuto / 200) * 28;
  } else if (
    capacitateCilindricaAuto > 2000 &&
    capacitateCilindricaAuto <= 2600
  ) {
    impozitAuto = (capacitateCilindricaAuto / 200) * 107;
  } else if (
    capacitateCilindricaAuto > 2600 &&
    capacitateCilindricaAuto <= 3000
  ) {
    impozitAuto = (capacitateCilindricaAuto / 200) * 215;
  } else {
    impozitAuto = (capacitateCilindricaAuto / 200) * 434;
  }

  paragrafRezultat.innerHTML = "Aveti de platit" + impozitAuto + "lei";
}
