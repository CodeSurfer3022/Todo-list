import {projectRender} from './projectDisplay';
import {projectList} from './project';
import forms from './projectForms';
import saveForm from './projectEvents';

function optionHandler() {
    const projectElement = this.parentNode.parentNode.parentNode;
    const projectName = projectElement.querySelector('h3').textContent;
    let project = projectList.getProject(projectName);

    // console.log(projectElement);

    switch (this.textContent) {
        case 'Edit Project':
            // console.log('edit');
            // console.log(project);
            console.log(projectElement.children);
            while (projectElement.lastElementChild) {
                projectElement.removeChild(projectElement.lastElementChild);
            }
            const editForm = forms.editForm;
            projectElement.appendChild(editForm);

            const save = editForm.querySelector('input[type="button"]');
            save.addEventListener('click', saveForm.update.bind(this, project, projectElement));

            break;
        case 'Delete Project':
            console.log('delete');
            projectRender.removeProjectElement(projectElement);
            projectList.remove(project.getName());
            console.log(projectList.getList());
            break;
        case 'Add notes':
            console.log('add Notes');
            projectRender.renderNotesPopup();

            const popup = document.querySelector('.popup');
            const addNotes = popup.querySelector('input[type="button"]');
            addNotes.addEventListener('click', saveForm.addNotes.bind(this, project));
    }
}

export default optionHandler;