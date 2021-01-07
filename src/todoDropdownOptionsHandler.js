import { todoList } from './todo';
import forms from './todoForms';
import { saveForm } from './todoEvents';
import { todoRender } from './todoDisplay';
import checklistRender from './todoChecklist';

const formDiv = document.createElement('div');
formDiv.classList.add('formDiv');

function optionHandler() {
  const dropdownContent = this.parentNode;
  const todoElement = this.parentNode.parentNode.parentNode;
  const todoTitle = todoElement.querySelector('h3').textContent;
  const todo = todoList.getTodo(todoTitle);

  switch (this.textContent) {
    case 'Edit Todo':
      console.log('edit');
      while (todoElement.lastElementChild) {
        todoElement.removeChild(todoElement.lastElementChild);
      }
      const { editForm } = forms;

      todoElement.appendChild(editForm);

      console.log(editForm.scrollHeight);
      const save = editForm.querySelector('input[type="button"]');
      save.addEventListener('click', saveForm.update.bind(this, todo, todoElement));

      break;

    case 'Delete Todo':
      console.log('delete');
      console.log(todo);
      todoList.remove(todoTitle);
      todoRender.removeTodoElement(todoElement);
      console.log(todoList.getList());
      break;

    case 'Add notes':
      console.log('add notes');
      todoRender.hideDropdown();
      todoRender.renderNotesPopup();

      const popup = document.querySelector('.popup');
      const addNotes = popup.querySelector('input[type="button"]');
      addNotes.addEventListener('click', saveForm.addNotes.bind(this, todo));
      break;

    case 'Move to project':
      console.log('move to project');

      const { projectForm } = forms;
      formDiv.appendChild(projectForm);

      console.log(projectForm);
      console.log(dropdownContent);
      dropdownContent.insertBefore(formDiv, this.nextElementSibling);

      const move = projectForm.querySelector('input[type="button"]');
      move.addEventListener('click', saveForm.moveToProject.bind(this, todo, todoElement, projectForm));

      break;

    case 'Reschedule':
      console.log('reshedule');

      const { duedateForm } = forms;
      formDiv.appendChild(duedateForm);

      dropdownContent.insertBefore(formDiv, this.nextElementSibling);

      const schedule = duedateForm.querySelector('input[type="button"]');
      schedule.addEventListener('click', saveForm.reschedule.bind(this, todo, duedateForm));

      break;

    case 'Set priority':
      console.log('set priority');

      const { priorityForm } = forms;
      formDiv.appendChild(priorityForm);

      dropdownContent.insertBefore(formDiv, this.nextElementSibling);

      const priority = priorityForm.querySelector('input[type="button"]');
      priority.addEventListener('click', saveForm.prioritize.bind(this, todo, priorityForm));

      break;

    case 'Add to checklist':
      console.log('add to checklist');
      todoRender.renderChecklistPopup();
      checklistRender.renderContainer(todo);
      break;

    case 'Mark as completed':
      console.log('mark as completed');
      console.log(todo);
      todo.markAsCompleted();
      break;
  }
}

export default optionHandler;
