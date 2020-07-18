import forms from './todoForms';
import {saveForm} from './todoEvents';

const todos = document.querySelector('#todos');

function addTodo() {
    console.log('add Todo');

    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    const editForm = forms.editForm;
    todoElement.appendChild(editForm);

    const save = editForm.querySelector('input[type="button"]');
    save.addEventListener('click', saveForm.add);

    todos.insertBefore(todoElement, this);
}

export default addTodo;