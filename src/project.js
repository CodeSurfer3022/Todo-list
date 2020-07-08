import {todoList} from './todo';

const projectList = (function() {
    const projects = [];
    function add(project) {
        projects.push(project);
    }

    function remove(name) {
        // This project should be removed from the projectList
        let index = projects.findIndex(project => project.getName() === name);

        // But first, all the todos under this project should be removed from the todoList
        let currentProject = projects[index];
        let todos = currentProject.getTodos();
        todos.forEach(todo => todoList.remove(todo.getTitle()));

        // Now remove the project
        projects.splice(index, 1);
    }

    function getProject(name) {
        return projects.find(project => project.getName() === name);
    }

    function getList() {
        return projects;
    }

    return {add, remove, getProject, getList};
})();

const Project = function (name_) {
    let name = name_;

    let notes;
    const todos = [];
    
    function edit(name_) {
        name = name_;
    }

    function addNotes(notes_) {
        notes = notes_;
    }

    function addTodo(todo) {
        todos.push(todo);
    }

    function getName() {
        return name;
    }

    function getNotes() {
        return notes;
    }

    function getTodos() {
        return todos;
    }

    // only use this for quick debugging
    function getProject() {
        return {name, todos};
    }

    return {edit, addNotes, addTodo, getName, getNotes, getTodos, getProject};
};

export {projectList, Project};