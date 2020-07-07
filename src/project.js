const projectList = (function() {
    const projects = [];
    function add(project) {
        projects.push(project);
    }

    function remove(name) {
        let index = projects.findIndex(project => project.getName() === name);
        // let tasks = projects;
        projects.splice(index, 1);
    }

    function getProject(name) {
        projects.find(project => project.getName() === name);
    }

    function getList() {
        return projects;
    }

    return {add, remove, getProject, getList};
})();

const Project = function (name_, todos_=[]) {
    let name = name_;
    
    const todos = todos_;
    
    function edit(name_) {
        name = name_;
    }

    function addTodo(todo) {
        todos.push(todo);
    }

    function getName() {
        return name;
    }

    function getTodos() {
        return todos;
    }

    function getProject() {
        return {name, todos};
    }

    return {edit, addTodo, getName, getTodos, getProject};
};

export {projectList, Project};