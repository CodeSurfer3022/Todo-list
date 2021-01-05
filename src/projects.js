import forms from './projectForms';
import {saveForm} from './projectEvents';

const projectsContainer = document.querySelector('.projects-container');

function addProject() {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    const editForm = forms.editForm;
    projectElement.appendChild(editForm);

    const save = editForm.querySelector('input[type="button"]');
    save.addEventListener('click', saveForm.add);

    projectsContainer.insertBefore(projectElement, projectsContainer.lastElementChild);
}

export default addProject;