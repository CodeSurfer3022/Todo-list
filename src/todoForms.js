const forms = {
    editForm : (() => {
        const form = document.createElement('form');
        form.name = 'editTodoForm';

        const br = document.createElement('br');

        const tlabel = document.createElement('label');
        tlabel.setAttribute('for', 'title');
        tlabel.textContent = 'Title';
        form.appendChild(tlabel);

        const title = document.createElement('input');
        title.type = 'text';
        title.name = 'title';
        title.id = 'title';
        form.appendChild(title);
        form.appendChild(br);

        const dlabel = document.createElement('label');
        dlabel.setAttribute('for', 'dueDate');
        dlabel.textContent = 'Due Date';
        form.appendChild(dlabel);

        const dueDate = document.createElement('input');
        dueDate.type = 'text';
        dueDate.name = 'dueDate';
        dueDate.id = 'dueDate';
        form.appendChild(dueDate);

        const plabel = document.createElement('label');
        plabel.setAttribute('for', 'priority');
        plabel.textContent = 'Priority';
        form.appendChild(plabel);

        const priority = document.createElement('input');
        priority.type = 'text';
        priority.name = 'priority';
        priority.id = 'priority';
        form.appendChild(priority);

        const prlabel = document.createElement('label');
        prlabel.setAttribute('for', 'projectName');
        prlabel.textContent = 'Project';
        form.appendChild(prlabel);

        const project = document.createElement('input');
        project.type = 'text';
        project.name = 'projectName';
        project.id = 'projectName';
        form.appendChild(project);
        form.appendChild(br);

        const save = document.createElement('input');
        save.type = 'button';
        save.value = 'Save';
        form.appendChild(save);

        return form;
    })(),
}

export default forms;
