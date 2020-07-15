import {todoList} from './todo';
import {todoRender} from './todoDisplay';

const saveForm = {
    update (todo, todoElement) {
        console.log(todo, todoElement);
        const todoForm = document.editTodoForm;
        const title = todoForm.title.value;
        const dueDate = todoForm.dueDate.value;
        const priority = todoForm.priority.value;
        const projectName = todoForm.projectName.value;

        todo.edit(title, dueDate, priority, projectName);
        todoList.getList().forEach(todo => console.log(todo.getTitle()));

        todoRender.updateTodoElement(todoElement, title);

    },
    addNotes(todo) {
        console.log('saving notes');
        const notes = document.popupForm.notes.value;
        console.log(notes);
        todo.addNotes(notes)
        todoRender.hideNotesPopup();
        let list = todoList.getList();
        list.forEach(project => console.log(project.getNotes()));
    },
    moveToProject(todo, form) {
        console.log('in move');
        const projectName = form.projectName.value;
        todo.moveToProject(projectName);

        const formDiv = form.parentNode;
        formDiv.removeChild(form);

        const dropdownContent = this.parentNode;
        dropdownContent.removeChild(formDiv);

        todoRender.hideDropdowns();

        console.log(projectName);
    },
    reschedule(todo, form) {
        const dueDate = form.dueDate.value;
        console.log(dueDate);
        todo.reschedule(dueDate);

        const formDiv = form.parentNode;
        formDiv.removeChild(form);

        const dropdownContent = this.parentNode;
        dropdownContent.removeChild(formDiv);

        todoRender.hideDropdowns();

    }

}

export {saveForm};

