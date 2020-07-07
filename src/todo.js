const todoList = (function() {
    const todos = [];
    function add(todo_) {
        todos.push(todo_);
    }

    function remove(todo_) {
        let index = todos.findIndex(todo => todo.title === todo_.title);
        todos.splice(index, 1);
    }

    function getList() {
        return todos;
    }

    return {add, remove, getList};
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
        let subtasks = checkList.map(subtask => subtask.getTodo());
        let completed_ = subtasks.every(subtask => subtask.completed);
        if(completed_) {
            completed = true;
            console.log(`marked ${this} as completed`);
        } else {
            console.log("please complete all subtasks before marking the task as complete");
        }
    }

    function getTodo() {
        return {title, notes, dueDate, project, checkList, completed};
    }

    return {edit, moveToProject, reschedule, addChecklist, markAsCompleted,getTodo};
}

export {todoList, Todo};



