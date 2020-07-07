const projectList = (function() {
    const projects = [];
    function add(project) {
        projects.push(project);
    }

    function remove(project) {
        let index = projects.findIndex(project_ => project_.title === project.title);
        let tasks =
        projects.splice(index, 1);
    }

    function getList() {
        return projects;
    }

    return {add, remove, getList};
})();

const Project = function (name, tasks=[]) {
    let name_ = name;
    
    const taks_ = tasks;
    
    function edit(name) {
        name_ = name;
    }

    function getProject() {
        return {name_, taks_}
    }
    return {edit};
};

export {projectList, Project};