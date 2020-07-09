const projects = document.querySelector('#projects');

const projectRender = {
    render(project) {
        console.log('project is rendering');
        console.log(project);
        console.log(projects);

        // each project is a div with 3 items: circle, name and options
        let div = document.createElement('div');
        div.classList.add('project');

        let circle = document.createElement('p');
        circle.classList.add('project-circle');
        circle.textContent = 'o';
        div.appendChild(circle);

        let name = document.createElement('h3');
        name.classList.add('project-name');
        name.textContent = project.getName();
        div.appendChild(name);

        let options = document.createElement('p');
        options.classList.add('options');
        options.textContent = '...';
        div.appendChild(options);

        projects.appendChild(div);
    },

    selectProject(project) {
        console.log('todos of current project are rendering');
        let currentTodos = project.getTodos();
        currentTodos.forEach(todo => console.log(todo));
    }
}

export {projectRender};