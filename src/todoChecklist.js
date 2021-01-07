import { todoRender } from './todoDisplay';
import addTodo from './todos';

const checklistContainer = document.querySelector('.checklistContainer');
const projectName = checklistContainer.querySelector('#project-name');
const taskTitle = checklistContainer.querySelector('#task-title');

const checklistDiv = checklistContainer.querySelector('.checklist');
const addSubtask = checklistDiv.querySelector('.add-todo');

function renderProjectName(name) {
  console.log(name);
  projectName.textContent = name;
}

function renderTaskTitle(title) {
  console.log(title);
  taskTitle.textContent = title;
}

function renderCurrentChecklist(checklist) {
  console.log(checklist);
}

const checklistRender = {
  renderContainer(todo) {
    const name = todo.getProjectName();
    const title = todo.getTitle();
    const checklist = todo.getCheckList();

    renderProjectName(name);
    renderTaskTitle(title);
    renderCurrentChecklist(checklist);
    addSubtask.addEventListener('click', addTodo.bind(this, checklistDiv));
  },
};

export default checklistRender;
