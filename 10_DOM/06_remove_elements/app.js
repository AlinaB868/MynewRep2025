// Removing elements from the DOM
// TODO: Add your JavaScript code here

function deleteTask() {
  // TODO: Implement this function
  const deleteBtn3 = document.querySelector(
    ".collection li:nth-child(3) a > i"
  );
  deleteBtn3.parentElement.parentElement.remove();
}

deleteTask();
