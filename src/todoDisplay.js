import dropdown from "./todoDropdown";
import { todoList } from "./todo";
import addTodo from "./todos";

const todosContainer = document.querySelector(".todos-container");
const notesPopup = document.querySelector("#notesPopupContainer");
const checklistContainer = document.querySelector("#checklistPopupContainer");
const checklistClosePopup = document.querySelector("#checklistClosePopup");
const todoDetailsPopup = document.querySelector("#todoPopupContainer");
const todoClosePopup = document.querySelector("#todoClosePopup");
const todoDropdown = document.querySelector("#todoDropdown");

function circle() {
  const circle = document.createElement("i");
  circle.className += "todo-circle fas fa-info-circle";
  circle.addEventListener("click", todoRender.renderDetails);
  return circle;
}

function title(title_) {
  const title = document.createElement("h3");
  title.classList.add("todo-name");
  title.textContent = title_;

  return title;
}

const todoRender = {
  renderProjectHeading(name) {
    console.log(name);
    const heading = document.createElement("h2");
    heading.classList.add("todo-heading");
    heading.textContent = name;
    todosContainer.appendChild(heading);
  },
  renderAddTodo() {
    const div = document.createElement("div");
    div.classList.add("add-todo");

    const i = document.createElement("i");
    i.className += "todo-plus fas fa-plus";
    div.appendChild(i);

    const p = document.createElement("p");
    p.classList.add("todo-text");
    p.textContent = "Add todo";
    div.appendChild(p);

    div.addEventListener("click", addTodo.bind(this, todosContainer));

    todosContainer.appendChild(div);
  },
  render(todo, todosContainer) {
    const activeProject = document.querySelector(".active-project");
    const projectName = activeProject.querySelector(".project-name")
      .textContent;

    if (projectName !== todo.getProjectName()) return;
    const addtodo = todosContainer.querySelector(".add-todo");
    console.log("todo is rendering");
    console.log(todo);
    console.log(todosContainer);

    // each project is a div with 3 items: circle, name and options
    const div = document.createElement("div");
    div.classList.add("todo");

    div.appendChild(circle());
    div.appendChild(title(todo.getTitle()));
    div.appendChild(dropdown());

    todosContainer.insertBefore(div, addtodo);
  },
  renderDetails() {
    console.log("in render details");
    console.log(this);
    const todoTitle = this.nextElementSibling.textContent;
    const todo = todoList.getTodo(todoTitle);

    todoDetailsPopup.classList.add("show");

    const details = todoDetailsPopup.querySelector("#todoDetails");

    const title = details.querySelector("h3");
    title.textContent = todo.getTitle();

    const project = details.querySelector("#project");
    project.textContent = todo.getProjectName();

    const duedate = details.querySelector("#dueDate");
    duedate.textContent = todo.getDueDate();

    const priority = details.querySelector("#priority");
    priority.textContent = todo.getPriority();

    const notes = details.querySelector("#notesDiv");
    notes.textContent = todo.getNotes();

    const checklist = details.querySelector("#checklist");
    const subtasks = todo.getCheckList();
    for (const subtask of subtasks) {
      const p = document.createElement("p");
      p.textContent = subtask.getTitle();
      checklist.appendChild(p);
    }
  },
  hideDetails() {
    todoDetailsPopup.classList.remove("show");
  },
  updateTodoElement(todoElement, title_) {
    console.log(todoElement, title_);
    todoElement.removeChild(todoElement.lastElementChild);

    todoElement.appendChild(circle());
    todoElement.appendChild(title(title_));
    todoElement.appendChild(dropdown());
  },
  removeTodoElement(todoElement) {
    todoElement.parentNode.removeChild(todoElement);
  },
  renderNotesPopup() {
    console.log(notesPopup);
    notesPopup.classList.toggle("show");
  },
  hideNotesPopup() {
    notesPopup.classList.toggle("show");
  },
  renderChecklistPopup() {
    checklistContainer.classList.add("show");
  },
  hideChecklistPopup() {
    checklistContainer.classList.remove("show");
  },
  renderDropdown() {
    console.log("in render dd");
    const dropdown = this.parentNode;
    dropdown.appendChild(todoDropdown);
    todoDropdown.classList.add("show");
  },
  hideDropdown() {
    console.log("in hide");
    if (todoDropdown.classList.contains("show")) {
      todoDropdown.classList.remove("show");
    }
  },
};

checklistClosePopup.addEventListener("click", todoRender.hideChecklistPopup);
todoClosePopup.addEventListener("click", todoRender.hideDetails);
export { todoRender };
