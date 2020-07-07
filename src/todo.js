const todoList = (function() {
    const todos = [];
    function add(todo) {
        todos.push(todo);
    }

    function remove(todo) {
        let index = todos.findIndex(todo_ => todo_.title === todo.title);
        todos.splice(index, 1);
    }

    function getList() {
        return todos;
    }

    return {add, remove, getList};
})();

function Todo (title, notes, dueDate, project="Home") {
    let title_ = title;
    let notes_ = notes;
    let dueDate_ = dueDate;
    let project_ = project;

    let checkList_ = [];
    let completed_ = false;

    function edit(title, notes, dueDate, project) {
        title_ = title;
        notes_ = notes;
        dueDate_ = dueDate;
        project_ = project;
    }

    function moveToProject(project) {
        project_ = project;
    }

    function reschedule(newDate) {
        dueDate_ = newDate;
    }

    function addChecklist(list) {
        checkList_ = list;
    }

    function markAsCompleted() {
        // check if all subtasks are completed
        let subtasks = checkList_.map(subtask => subtask.getTodo());
        let completed = subtasks.every(subtask => subtask.completed_);
        if(completed) {

        } else {
            console.log("please complete all subtasks before marking the task as complete");
        }
    }

    function getTodo() {
        return {title_, notes_, dueDate_, project_, checkList_, completed_};
    }

    return {edit, moveToProject, reschedule, addChecklist, markAsCompleted,getTodo};
}

export {todoList, Todo};



