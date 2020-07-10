const dropdownOptions = {
    edit: (() => {
        let edit = document.createElement('p');
        edit.classList.add('edit-project');
        edit.textContent = 'Edit Project';

        return edit;
    })(),
    del: (() => {
        let del = document.createElement('p');
        del.classList.add('delete-project');
        del.textContent = 'Delete Project';

        return del;
    })(),
    notes: (() => {
        let notes = document.createElement('p');
        notes.classList.add('project-notes');
        notes.textContent = 'Add notes';

        return notes;
    })()
}

export {dropdownOptions};