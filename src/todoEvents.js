import {Todo, todoList} from './todo';
import {todoRender} from './todoDisplay';

const saveForm = {
    add(todos, todoElement) {
        console.log('add');
        console.log(this, todos);
        const todoForm = document.todoEditForm;
        const title = todoForm.title.value;
        const dueDate = todoForm.dueDate.value;
        const priority = todoForm.priority.value;
        const projectName = todoForm.projectName.value;

        let todo = Todo(title, dueDate, priority, projectName);
        todoList.add(todo);

        todos.removeChild(todoElement);
        todoRender.render(todo, todos);
        console.log(todoElement)
        console.log(todoList.getList())

    },
    update (todo, todoElement) {
        console.log(todo, todoElement);
        const todoForm = document.todoEditForm;
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
    moveToProject(todo, todoElement, form) {
        console.log('in move');
        const projectName = form.projectName.value;

        if(projectName !== todo.getProjectName()) {
            todoRender.removeTodoElement(todoElement);
        }
        todo.moveToProject(projectName);

        const formDiv = form.parentNode;
        formDiv.removeChild(form);

        const dropdownContent = this.parentNode;
        dropdownContent.removeChild(formDiv);

        todoRender.hideDropdown();

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

        todoRender.hideDropdown();

    },
    prioritize(todo, form) {
        const priority = form.priority.value;
        console.log(priority);
        todo.reschedule(priority);

        const formDiv = form.parentNode;
        formDiv.removeChild(form);

        const dropdownContent = this.parentNode;
        dropdownContent.removeChild(formDiv);

        todoRender.hideDropdown();
    }

}

export {saveForm};

