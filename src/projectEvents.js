import {projectRender} from './projectDisplay';
import {projectList} from './project';

const saveForm = {
    update (project, projectElement) {
        console.log(project, projectElement);
        const projectName = document.editForm.projectName.value;
        project.edit(projectName);
        projectRender.updateProjectElement(projectElement, projectName);
        // let list = projectList.getList();
        // list.forEach(project => console.log(project.getName()));
    }
}

export default saveForm;