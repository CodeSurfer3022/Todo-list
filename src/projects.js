import forms from './projectForms';
import {saveForm} from './projectEvents';

const projects = document.querySelector('#projects');

function addProject() {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    const editForm = forms.editForm;
    projectElement.appendChild(editForm);

    const save = editForm.querySelector('input[type="button"]');
    save.addEventListener('click', saveForm.add);

    projects.insertBefore(projectElement, projects.lastElementChild);
}

export default addProject;