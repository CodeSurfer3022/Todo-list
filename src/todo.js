import {projectList} from './project';

const todoList = (function() {
    const todos = [];
    function add(todo) {
        todos.push(todo);
    }

    function remove(title) {
        let index = todos.findIndex(todo => todo.getTitle() === title);
        todos.splice(index, 1);
    }

    function getTodo(title) {
        return todos.find(todo => todo.getTitle() === title);
    }

    function getList() {
        return todos;
    }

    return {add, remove, getTodo, getList};
})();

function Todo (title_, notes_, dueDate_, projectName_="Home") {
    let title = title_;
    let notes = notes_;
    let dueDate = dueDate_;
    let projectName = projectName_;

    let checkList = [];
    let completed = false;

    // Add the current todo to project

    function edit(title_, notes_, dueDate_, projectName_) {
        title = title_;
        notes = notes_;
        dueDate = dueDate_;
        projectName = projectName_;
    }

    function moveToProject(projectName_) {
        // Remove the task from the current project
        let currentProject = projectList.getProject(projectName);
        currentProject.getTodos().filter(task => task.getTitle() === title);

        // reassign projectName here and add task to new project
        projectName = projectName_;
        let newProject = projectList.getProject(projectName);
        newProject.getTodos().push()
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

    function getProjectName() {
        return projectName;
    }

    function getCheckList() {
        return checkList;
    }

    function isCompleted() {
        return completed;
    }

    return {edit, moveToProject, reschedule, addChecklist, markAsCompleted,
        getTitle, getNotes, getDueDate, getProjectName, getCheckList, isCompleted};
}

export {todoList, Todo};



