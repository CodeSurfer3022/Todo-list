const dropdownOptions = {
    edit () {
        let edit = document.createElement('p');
        edit.classList.add('edit-todo');
        edit.textContent = 'Edit Todo';

        return edit;
    },
    del (){
        let del = document.createElement('p');
        del.classList.add('delete-todo');
        del.textContent = 'Delete Todo';

        return del;
    },
    notes (){
        let notes = document.createElement('p');
        notes.classList.add('todo-notes');
        notes.textContent = 'Add notes';

        return notes;
    },
    move (){
        let move = document.createElement('p');
        move.classList.add('todo-move');
        move.textContent = 'Move to project';

        return move;
    },
    reschedule (){
        let reschedule = document.createElement('p');
        reschedule.classList.add('todo-reschedule');
        reschedule.textContent = 'Reschedule';

        return reschedule;
    },
    priority (){
        let priority = document.createElement('p');
        priority.classList.add('todo-priority');
        priority.textContent = 'Set priority';

        return priority;
    },
    checklist (){
        let checklist = document.createElement('p');
        checklist.classList.add('todo-checklist');
        checklist.textContent = 'Add to checklist';

        return checklist;
    },
    mark (){
        let mark = document.createElement('p');
        mark.classList.add('todo-mark');
        mark.textContent = 'Mark as completed';

        return mark;
    }
}

export {dropdownOptions};