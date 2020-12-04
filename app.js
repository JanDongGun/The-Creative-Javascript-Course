//Selector
let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
//Event listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Functions

function addTodo(event) {
  event.preventDefault();

  // create div todo
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create new todo
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // check mark button
  let completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<li class="fas fa-check"></li>';
  completeBtn.classList.add("complete-btn");
  todoDiv.appendChild(completeBtn);

  // check trash button
  let trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<li class="fas fa-trash"></li>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  let item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("animationend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.add("completed");
  }
}
