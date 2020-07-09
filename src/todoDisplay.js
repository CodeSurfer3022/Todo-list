const todos = document.querySelector('#todos');

const todoRender = {
    addProjectHeading(name) {
        console.log(name);
        const heading = document.createElement('h2');
        heading.classList.add('todo-heading');
        heading.textContent = name;
        todos.appendChild(heading);
    },

    render(todo) {
        console.log('todo is rendering');
        console.log(todo);
        console.log(todos);

        // each project is a div with 3 items: circle, name and options
        let div = document.createElement('div');
        div.classList.add('todo');

        let circle = document.createElement('p');
        circle.classList.add('todo-circle');
        circle.textContent = 'o';
        div.appendChild(circle);

        let title = document.createElement('h3');
        title.classList.add('todo-name');
        title.textContent = todo.getTitle();
        div.appendChild(title);

        let options = document.createElement('p');
        options.classList.add('todo-options');
        options.textContent = '...';
        div.appendChild(options);

        todos.appendChild(div);
    }
}

export {todoRender};