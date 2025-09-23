// const allLiItems = document.getElementsByTagName("li");
// console.log(allLiItems);
// for (let i = 0; i <= allLiItems.length - 1; i++) {
//   if (i % 2 == 1) {
//     allLiItems[i].style.backgroundColor = "pink";
//   } else {
//     allLiItems[i].style.backgroundColor = "lightgrey";
//   }
// }

const allButtons = document.getElementsByClassName("btn");
console.log(allButtons);
for (let i = 0; i <= allButtons.length - 1; i++) {
  allButtons[i].classList.remove("black");
  allButtons[i].style.backgroundColor = "orange";
}

const allLiItems = document.querySelectorAll(
  "#main > .card-action > ul > .collection-item"
);
console.log(allLiItems);
for (let i = 0; i <= allLiItems.length - 1; i++) {
  if (i % 2 == 1) {
    allLiItems[i].style.backgroundColor = "pink";
  } else {
    allLiItems[i].style.backgroundColor = "lightgrey";
  }
}
