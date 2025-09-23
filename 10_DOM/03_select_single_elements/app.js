// Selecting single elements from the DOM
// TODO: Add your JavaScript code here
const addTaskButton = document.getElementById("add-task");
console.log(addTaskButton);
console.log(addTaskButton.type);
console.log(addTaskButton.className);

addTaskButton.style.backgroundColor = "red";

const taskElement = document.getElementById("task");
taskElement.value = "Plimbă câinele";

const myTask = document.querySelector(".card-action #task-title");
myTask.style.color = "blue";

const fourthTask = cocument.querySelector(
  ".card-action > ul > li:nth-child(4)"
);
fourthTask.style.textDecoration = "line-through";
