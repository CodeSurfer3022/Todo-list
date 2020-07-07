const projectList = (function() {
    const projects = [];
    function add(project_) {
        projects.push(project_);
    }

    function remove(project_) {
        let index = projects.findIndex(project => project.title === project_.title);
        // let tasks = projects;
        projects.splice(index, 1);
    }

    function getProject(project_) {
        projects.find(project => project.name === project_.getName());
    }

    function getList() {
        return projects;
    }

    return {add, remove, getProject, getList};
})();

const Project = function (name_, tasks_=[]) {
    let name = name_;
    
    const tasks = tasks_;
    
    function edit(name_) {
        name = name_;
    }

    function getName() {
        return name;
    }

    function getTasks() {
        return tasks;
    }

    function getProject() {
        return {name, tasks};
    }

    return {edit, getName, getTasks, getProject};
};

export {projectList, Project};