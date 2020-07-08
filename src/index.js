import {todoList, Todo} from './todo';
import {projectList, Project} from './project';

// Create a default project 'home'
let home = Project('Home');
projectList.add(home);

// Create a To do and add it to the todoList
let todo1 = Todo('todo1', 'just checkin', 'today', 'high', 'Home');
todoList.add(todo1);
console.log(todo1);
console.log(todoList.getList());
console.log(todoList.getTodo('todo1'));

// Add the To do to its respective project
home.addTodo(todo1);

// Operations on a to do
todo1.edit('todo2', 'checkin edit', 'tomorrow', 'high', 'Home');
console.log(todoList.getTodo('todo2'));
console.log(home.getTodos());

todo1.moveToProject('Home');
console.log(home.getTodos());

todo1.reschedule('today');

let subtask = Todo('subtask1', 'do subtask', 'today', 'misc');
todo1.addToChecklist(subtask);
console.log(todoList.getTodo('todo2'));

console.log('output for mark');
todo1.markAsCompleted();
// todoList.remove(todo1);

subtask.markAsCompleted();
todo1.markAsCompleted();
console.log(todo1.getTodo());
let subtasks = todo1.getTodo().checkList;
console.log(subtasks[0].getTodo());

// operations on a project
console.log('trying to remove project from projectList');
console.log(projectList.getList());
console.log(todoList.getList());
projectList.remove('Home');
console.log(todoList.getList());
console.log(projectList.getList());

home.edit('Bome');
