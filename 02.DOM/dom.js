const todoList = document.querySelector("#todo-list");
const count = document.querySelector("b");
const btnAddItem = document.querySelector(".btn");
const input = document.querySelector(".input-name");
btnAddItem.addEventListener("click", function (e) {
  e.preventDefault();
  let item = document.createElement("li");
  todoList.appendChild(item);
  item.innerText = input.value;

  count.innerText = todoList.childElementCount;
  input.value = "";
  // remove when click item
  item.addEventListener("click", rmItem);
});

function rmItem(e) {
  e.target.remove();
}
