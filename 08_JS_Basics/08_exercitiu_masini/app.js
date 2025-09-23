var masini = [
  { marca: "Skoda", model: "Fabia", anFabricatie: 2004, kmParcursi: 200000 },
  {
    marca: "Volkswagen",
    model: "Golf",
    anFabricatie: 2007,
    kmParcursi: 180000,
  },
  { marca: "Seat", model: "Ibiza", anFabricatie: 2010, kmParcursi: 150000 },
  { marca: "Dacia", model: "Logan", anFabricatie: 2015, kmParcursi: 120000 },
  { marca: "Renault", model: "Clio", anFabricatie: 2018, kmParcursi: 80000 },
];

var toateMasinile = masini;
var i = 0;
var containerMasini = document.getElementById("container-masini");

while (i < toateMasinile.length) {
  containerMasini.innerHTML += `
        <div class="masina">
            <p class="marca">${toateMasinile[i].marca}</p>
            <p class="model">${toateMasinile[i].model}</p>
            <p class="kmParcursi">${toateMasinile[i].kmParcursi}</p>
            <p class="anFabricatie">${toateMasinile[i].anFabricatie}</p>
        </div>
    `;
  console.log(toateMasinile[i]);
  i++;
}
