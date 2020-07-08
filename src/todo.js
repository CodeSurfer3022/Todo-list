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

function Todo (title_, notes_, dueDate_, priority_, projectName_="Home") {
    let title = title_;
    let notes = notes_;
    let dueDate = dueDate_;
    let priority = priority_;
    let projectName = projectName_;

    let checkList = [];
    let completed = false;

    // Add the current todo to project

    function edit(title_, notes_, dueDate_, priority_, projectName_) {
        title = title_;
        notes = notes_;
        dueDate = dueDate_;
        priority = priority_;
        moveToProject(projectName_);
    }

    function moveToProject(projectName_) {
        if(projectName === projectName_) return;
        console.log(projectName);
        // Remove the todo from the current project

        let currentProject = projectList.getProject(projectName);
        console.log(currentProject.getTodos());
        let index = currentProject.getTodos().findIndex(todo => todo.getTitle() === title);
        console.log(index);
        currentProject.getTodos().splice(index, 1);

        // reassign projectName here and add todo to new project
        projectName = projectName_;
        let newProject = projectList.getProject(projectName);
        newProject.getTodos().push(this);
        console.log(newProject.getTodos());
    }

    function reschedule(dueDate_) {
        dueDate = dueDate_;
    }

    function setPriority(priority_) {
        priority = priority_;
    }

    function addToChecklist(todo) {
        checkList.push(todo);
    }

    function markAsCompleted() {
        // check if all subtasks are completed
        console.log(checkList);
        let completed_ = checkList.every(todo => todo.isCompleted());
        if(completed_) {
            completed = true;
            console.log(`marked ${this} as completed`);
        } else {
            console.log("please complete all todos in checklist before marking the todo as complete");
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

    function getPriority() {
        return priority;
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

    // only use this function for quick debugging
    function getTodo() {
        return {title, notes, dueDate, priority, projectName, checkList, completed};
    }

    return {edit, moveToProject, reschedule, setPriority, addToChecklist, markAsCompleted,
        getTitle, getNotes, getDueDate, getPriority, getProjectName, getCheckList,
        isCompleted, getTodo};
}

export {todoList, Todo};



