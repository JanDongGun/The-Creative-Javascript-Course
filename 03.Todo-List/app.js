//Selector
let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterTodo = document.querySelector(".filter-todo");
//Event listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click", filter);
document.addEventListener("DOMContentLoaded", getTodos);
// Functions
function addTodo(event) {
  event.preventDefault();

  createTodo(todoInput.value);
  saveLocalTodos(todoInput.value);
  todoInput.value = "";
}

function deleteCheck(event) {
  let item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    rmLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.add("completed");
  }
}

function filter(e) {
  let todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //CHECK--HEY DO I already have thing in here?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    createTodo(todo);
  });
}

function createTodo(content) {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create new todo
  let newTodo = document.createElement("li");
  newTodo.innerText = content;
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
}

function rmLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let todoContent = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoContent), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
