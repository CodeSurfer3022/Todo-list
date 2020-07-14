import {todoList} from './todo';
import {todoRender} from './todoDisplay';

// const projectListeners = {
//     select(projectElement, project) {
//         console.log(projectElement, project);
//         projectElement.addEventListener('click', projectRender.selectProject.bind(this, projectElement, project));
//     }
// }
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
    addNotes(project) {
        console.log('saving notes');
        const notes = document.popupForm.notes.value;
        // console.log(notes);
        project.addNotes(notes)
        // todoRender.hideNotesPopup();
        // let list = projectList.getList();
        // list.forEach(project => console.log(project.getNotes()));
    }
}

export {saveForm};








