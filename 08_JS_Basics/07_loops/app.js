// if(conditie) {
// // executa daca ..
// }

// while(conditie) {
//     // executa cat timp...conditia-A
// }

// var start = 3;
// var end = 77;
// var currentNumber = start;
// while (currentNumber <= end) {
//   console.log(currentNumber);
//   currentNumber++;
// }

// var incercari = 0;
// var totalAruncari = 0;
// while (true) {
//   var zar1 = parseInt(Math.random() * 6) + 1;
//   var zar2 = parseInt(Math.random() * 6) + 1;
//   console.log(zar1, " ", zar2);
//   incercari++;
//   if (zar1 == 6 && zar2 == 6) {
//     console.log(
//       "Am avut nevoie de " + incercari + " incercari pana am dat 6-6"
//     );
//   }
//   if (zar1 == 6 && zar2 == 6) {
//     totalAruncari++;
//   }

//   if (totalAruncari == 1000) {
//     console.log(totalAruncari);
//   }
// }

const zar = document.getElementById("zar");
const button = document.getElementById("aruncaZar");
const rezultat = document.getElementById("rezultat");

button.addEventListener("click", () => {
  zar.classList.add("rotating");

  setTimeout(() => {
    zar.classList.remove("rotating");
    const fata = Math.floor(Math.random() * 6) + 1;
    zar.className = `face-${fata}`;
    rezultat.textContent = `Ai aruncat un ${fata}!`;
  }, 1000);
});

const sound = document.getElementById("soundRoll");
sound.currentTime = 0;
sound.play();
