const dropdownOptions = {
    edit: (() => {
        let edit = document.createElement('p');
        edit.classList.add('edit-todo');
        edit.textContent = 'Edit Todo';

        return edit;
    })(),
    del: (() => {
        let del = document.createElement('p');
        del.classList.add('delete-todo');
        del.textContent = 'Delete Todo';

        return del;
    })(),
    notes: (() => {
        let notes = document.createElement('p');
        notes.classList.add('todo-notes');
        notes.textContent = 'Add notes';

        return notes;
    })()
}

export {dropdownOptions};