// Traversing the DOM (parent, child, sibling elements)
// TODO: Add your JavaScript code here

// children
const taskList = document.querySelector(".collection");
console.log(taskList.children);

// parentElement
const TaskParent = document.querySelector(".collection");
console.log(TaskParent.parentElement.parentElement.parentElement);

// siblings
const taskSibling = document.querySelector(".collection > li:nth-child(3");
console.log(taskSibling.previousElementSibling.innerHTML);
console.log(taskSibling.nextElementSibling.innerHTML);

// firstElementChild
// lastElementChild
