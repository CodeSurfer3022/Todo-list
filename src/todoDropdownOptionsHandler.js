import {todoList} from './todo';
import forms from './todoForms';
import {saveForm} from './todoEvents';
import {todoRender} from './todoDisplay';

function optionHandler() {
    const todoElement = this.parentNode.parentNode.parentNode;
    const todoTitle = todoElement.querySelector('h3').textContent;
    let todo = todoList.getTodo(todoTitle);

    switch (this.textContent) {
        case 'Edit Todo':
            console.log('edit');
            while (todoElement.lastElementChild) {
                todoElement.removeChild(todoElement.lastElementChild);
            }
            const editForm = forms.editForm;

            todoElement.appendChild(editForm);

            console.log(editForm.scrollHeight);
            const save = editForm.querySelector('input[type="button"]');
            save.addEventListener('click', saveForm.update.bind(this, todo, todoElement));

            break;

        case 'Delete Todo':
            console.log('delete');
            console.log(todo);
            todoList.remove(todoTitle);
            console.log(todoList.getList());
            todoElement.parentNode.removeChild(todoElement);

            break;

        case 'Add notes':
            console.log('add notes');
            todoRender.renderNotesPopup();

            const popup = document.querySelector('.popup');
            const addNotes = popup.querySelector('input[type="button"]');
            addNotes.addEventListener('click', saveForm.addNotes.bind(this, todo));
            break;

        case 'Move to project':
            console.log('move to project');
            const projectForm = forms.projectForm;

            todo.moveToProject()
            break;
        case 'Reschedule':
            console.log('reshedule');
            break;
        case 'Set priority':
            console.log('set priority');
            break;
        case 'Add to checklist':
            console.log('add to checklist');
            break;
        case 'Mark as completed':
            console.log('mark as completed');
            console.log(todo);
            todo.markAsCompleted();
            break;

    }
}

export default optionHandler;