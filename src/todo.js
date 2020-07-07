const todoList = (function() {
    const todos = [];
    function add(todo_) {
        todos.push(todo_);
        let project = todo_.getProject();

    }

    function remove(todo_) {
        let index = todos.findIndex(todo => todo.title === todo_.title);
        todos.splice(index, 1);
    }

    function getTodo(todo_) {
        return todos.find(todo => todo.getTitle() === todo_.getTitle());
    }

    function getList() {
        return todos;
    }

    return {add, remove, getTodo, getList};
})();

function Todo (title_, notes_, dueDate_, project_="Home") {
    let title = title_;
    let notes = notes_;
    let dueDate = dueDate_;
    let project = project_;

    let checkList = [];
    let completed = false;

    function edit(title_, notes_, dueDate_, project_) {
        title = title_;
        notes = notes_;
        dueDate = dueDate_;
        project = project_;
    }

    function moveToProject(project_) {
        project = project_;
    }

    function reschedule(dueDate_) {
        dueDate = dueDate_;
    }

    function addChecklist(checkList_) {
        checkList = checkList_;
    }

    function markAsCompleted() {
        // check if all subtasks are completed
        console.log(checkList);
        let subtasks = checkList.map(subtask => todoList.getTodo(subtask));
        console.log(subtasks);
        let completed_ = subtasks.every(subtask => subtask.isCompleted);
        if(completed_) {
            completed = true;
            console.log(`marked ${this} as completed`);
        } else {
            console.log("please complete all subtasks before marking the task as complete");
        }
    }

    function getTitle() {
        return title;
    }

    function getNotes() {
        return notes;
    }

    function getDueDate() {
        return dueDate;
    }

    function getProject() {
        return project;
    }

    function getCheckList() {
        return checkList;
    }

    function isCompleted() {
        return completed;
    }

    return {edit, moveToProject, reschedule, addChecklist, markAsCompleted,
        getTitle, getNotes, getDueDate, getProject, getCheckList, isCompleted};
}

export {todoList, Todo};



