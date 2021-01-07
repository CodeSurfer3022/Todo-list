import forms from "./todoForms";
import { saveForm } from "./todoEvents";

function addTodo(todos) {
  console.log("add Todo");
  console.log(todos);

  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  const { editForm } = forms;
  todoElement.appendChild(editForm);

  const save = editForm.querySelector('input[type="button"]');
  save.addEventListener("click", saveForm.add.bind(this, todos, todoElement));

  todos.insertBefore(todoElement, todos.lastElementChild);
}

export default addTodo;
