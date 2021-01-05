import {todoRender} from './todoDisplay';
import dropdown from './projectDropdown';
import {projectListeners} from './projectEvents';
import {projectList} from './project';

const todosContainer = document.querySelector('.todos-container');
const projectsContainer = document.querySelector('.projects-container');
const collapse = projectsContainer.querySelector('.collapsible');
const content = projectsContainer.querySelector('.content');
const notesPopup = document.querySelector('#notesPopupContainer');
const closePopup = document.querySelector('#notesClosePopup');
const projectDetailsPopup = document.querySelector('#projectPopupContainer');
const projectClosePopup = document.querySelector('#projectClosePopup')
const projectDropdown = document.querySelector('#projectDropdown');

function circle() {
    let circle = document.createElement('i');
    circle.className += 'project-circle fas fa-info-circle';
    circle.addEventListener('click', projectRender.renderDetails);

    return circle;
}

function name(name_) {
    let name = document.createElement('h3');
    name.classList.add('project-name');
    console.log(name_)
    name.textContent = name_;

    return name;
}

const projectRender = {
    render(project) {
        console.log('project is rendering');
        console.log(project);

        // each project is a div with 3 items: circle, name and dropdown
        let div = document.createElement('div');
        div.classList.add('project');
        projectListeners.select(div, project);

        div.appendChild(circle());
        div.appendChild(name(project.getName()));
        div.appendChild(dropdown());

        content.appendChild(div);
    },
    renderDetails() {
        console.log('in render details');
        console.log(this);
        const projectName = this.nextElementSibling.textContent;
        const project = projectList.getProject(projectName);

        projectDetailsPopup.classList.add('show');

        const details = projectDetailsPopup.querySelector('#projectDetails');

        const name = details.querySelector('h3');
        name.textContent = project.getName();

        const notes = details.querySelector('#projectNotes');
        notes.textContent = project.getNotes();

        const todosDiv = details.querySelector('#todosDiv');
        const todos = project.getTodos();
        for(let todo of todos) {
            const p = document.createElement('p')
            p.textContent = todo.getTitle();
            todosDiv.appendChild(p);
        }
    },
    hideDetails() {
        projectDetailsPopup.classList.remove('show');
    },
    renderProjects() {
        let maxHeight = window.getComputedStyle(content).maxHeight;
        this.classList.toggle("active");
        if (maxHeight === '0px') {
            console.log(maxHeight);
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    },
    renderNotesPopup() {
        console.log(notesPopup);
        notesPopup.classList.toggle('show');
    },
    hideNotesPopup() {
        notesPopup.classList.toggle('show');
    },
    removeProjectElement(projectElement) {
        projectElement.parentNode.removeChild(projectElement);
    },
    updateProjectElement(projectElement, projectName) {
        console.log('in update proj ele' + projectElement);
        projectElement.removeChild(projectElement.lastElementChild);
        console.log(projectName);
        projectElement.appendChild(circle());
        projectElement.appendChild(name(projectName));
        projectElement.appendChild(dropdown());
        projectElement.addEventListener('click', () => projectListeners.select(projectElement, projectList.getProject(projectName)));
    },
    selectProject(projectElement, project) {
        console.log('this is being called');
        if (projectElement.classList.contains('active-project')) return;
        projectElement.classList.add('active-project');
        console.log('todos of current project are rendering');
        todosContainer.textContent = '';
        todoRender.renderProjectHeading(project.getName());
        todoRender.renderAddTodo();
        let currentTodos = project.getTodos();
        currentTodos.forEach(todo => todoRender.render(todo, todosContainer));
    },
    renderDropdown() {
        const dropdown = this.parentNode;
        dropdown.appendChild(projectDropdown);
        projectDropdown.classList.add('show');
    },
    hideDropdown() {
        if(projectDropdown.classList.contains('show')) {
            projectDropdown.classList.remove('show');
        }
    }
}

closePopup.addEventListener('click', projectRender.hideNotesPopup);
projectClosePopup.addEventListener('click', projectRender.hideDetails)
collapse.addEventListener('click', projectRender.renderProjects);

export {projectRender};