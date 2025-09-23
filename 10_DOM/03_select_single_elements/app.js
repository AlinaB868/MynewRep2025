// Selecting single elements from the DOM
// TODO: Add your JavaScript code here
// const addTaskButton = document.getElementById("add-task");
// console.log(addTaskButton);
// console.log(addTaskButton.type);
// console.log(addTaskButton.className);

// addTaskButton.style.backgroundColor = "red";

// const taskElement = document.getElementById("task");
// taskElement.value = "Plimbă câinele";

// const myTask = document.querySelector(".card-action #task-title");
// myTask.style.color = "blue";

// const fourthTask = document.querySelector(
//   ".card-action > ul > li:nth-child(4)"
// );
// fourthTask.style.textDecoration = "line-through";

const modificaAddTask = document.getElementById("add-task");
console.log(modificaAddTask);
console.log(modificaAddTask.type);
console.log(modificaAddTask.className);
modificaAddTask.style.backgroundColor = "green";
modificaAddTask.style.color = "pink";

const modificaText = document.getElementById("task");
modificaText.value = "Invata!";

// #main > div.card-action > .clear-task
const deleteAllTasks = document.querySelector(
  "#main > div.card-action > .clear-tasks"
);
console.log(deleteAllTasks.className);

deleteAllTasks.classList.remove("black");
deleteAllTasks.classList.remove("btn");
deleteAllTasks.classList.add("green");
deleteAllTasks.classList.add("btn");

const taskEl = document.querySelector(".card-action #task-title");
taskEl.style.color = "blue";

const newTask = document.querySelector("#main > div.card-content > span");
newTask.style.color = "green";

const modifSleep = document.querySelector(
  "#main > div.card-action > ul > li:nth-child(5)"
);
modifSleep.style.color = "red";

const modifWork = document.querySelector(".card-action > ul > li:nth-child(4)");
modifWork.style.color = "blue";
modifWork.style.textDecoration = "line-through";
