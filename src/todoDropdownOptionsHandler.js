import {todoList} from './todo';
import forms from './todoForms';
import {saveForm} from './todoEvents';

function optionHandler() {
    const todoElement = this.parentNode.parentNode.parentNode;
    const todoName = todoElement.querySelector('h3').textContent;
    let todo = todoList.getTodo(todoName);

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
            break;
        case 'Add notes':
            console.log('add notes');
            break;
        case 'Move to project':
            console.log('move to project');
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
            break;

    }
}

export default optionHandler;