import {projectRender} from './projectDisplay';
import {Project, projectList} from './project';

const content = document.querySelector('.content');

const projectListeners = {
    select(projectElement, project) {
        console.log(projectElement, project);
        projectElement.addEventListener('click', projectRender.selectProject.bind(this, projectElement, project));
    }
}
const saveForm = {
    add () {
        console.log('add project');
        const projectElement = this.parentNode.parentNode;
        const projectForm = document.editProjectForm;
        const name = projectForm.projectName.value;

        console.log(projectForm);
        const project = Project(name);
        projectList.add(project);

        projectRender.updateProjectElement(projectElement, name);
        content.appendChild(projectElement);
    },
    update (project, projectElement) {
        console.log(project, projectElement);
        const projectName = document.editForm.projectName.value;
        project.edit(projectName);
        projectRender.updateProjectElement(projectElement, projectName);

    },
    addNotes(project) {
        console.log('saving notes');
        const notes = document.popupForm.notes.value;
        // console.log(notes);
        project.addNotes(notes)
        projectRender.hideNotesPopup();
        // let list = projectList.getList();
        // list.forEach(project => console.log(project.getNotes()));
    }
}

export  {projectListeners, saveForm};