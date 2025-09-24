// Creating elements in the DOM
// TODO: Add your JavaScript code here

function createLiTask() {
  const newLiTask = document.createElement("li");
  newLiTask.classList.add("collection-item");

  const newTaskInput = document.getElementById("task");
  const newTaskTitle = newTaskInput.value;

  newLiTask.innerText = newTaskTitle;

  const deleteTaskBtn = document.createElement("a");
  deleteTaskBtn.href = "#";
  deleteTaskBtn.classList.add("delete-item");
  deleteTaskBtn.classList.add("secondary-content");
  deleteTaskBtn.innerHTML = '<i class = "fa fa-remove"></i>';
  newLiTask.appendChild(deleteTaskBtn);
  return newLiTask;
}
function addNewTask(newTask) {
  // TODO: Implement this function
  const li = createLiTask();
  const ul = document.querySelector("ul.collection");
  ul.appendChild(li);
}

addNewTask();

function addNewTaskV2() {
  const newTaskInput = document.getElementById("task").value;
  const ul = document.querySelector("ul.collection");
  ul.innerHTML += `
  <li class="collection-item"> ${newTaskInput}
                Work
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
  `;
}
