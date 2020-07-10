import {todoRender} from './todoDisplay';
const projects = document.querySelector('#projects');

function circle() {
    let circle = document.createElement('p');
    circle.classList.add('project-circle');
    circle.textContent = 'o';

    return circle;
}

function name(name_) {
    let name = document.createElement('h3');
    name.classList.add('project-name');
    name.textContent = name_;

    return name;
}

function dropdown() {
    let dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    // The dropdown has options and dropdown content
    dropdown.appendChild(options())
    dropdown.appendChild(dropdownContent());

    return dropdown;
}

function options() {
    let options = document.createElement('p');
    options.classList.add('project-options');
    options.textContent = '...';
    options.addEventListener('click', projectRender.renderOptions);

    return options;
}

function dropdownContent() {
    let dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');
    dropdownContent.id = 'myDropdown';

    // The dropdown content has the project options
    dropdownContent.appendChild(edit());
    dropdownContent.appendChild(del());
    dropdownContent.appendChild(notes());

    return dropdownContent;
}

function edit() {
    let edit = document.createElement('p');
    edit.classList.add('edit-project');
    edit.textContent = 'Edit Project';

    return edit;
}

function del() {
    let del = document.createElement('p');
    del.classList.add('delete-project');
    del.textContent = 'Delete Project';

    return del;
}

function notes() {
    let notes = document.createElement('p');
    notes.classList.add('project-notes');
    notes.textContent = 'Add notes';

    return notes;
}

const projectRender = {
    render(project) {
        console.log('project is rendering');
        console.log(project);

        // each project is a div with 3 items: circle, name and dropdown
        let div = document.createElement('div');
        div.classList.add('project');

        div.appendChild(circle());
        div.appendChild(name(project.getName()));
        div.appendChild(dropdown());

        projects.appendChild(div);
    },
    selectProject(project) {
        console.log('todos of current project are rendering');
        todoRender.renderProjectHeading(project.getName());
        todoRender.renderAddTodo();
        let currentTodos = project.getTodos();
        currentTodos.forEach(todo => todoRender.render(todo));
    },
    renderOptions() {
        console.log('ok');
        const dropdownContent = projects.querySelector('#myDropdown');
        console.log(dropdownContent);
        dropdownContent.classList.toggle('show');
    }
}

export {projectRender};