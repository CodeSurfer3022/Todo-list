import {todoList, Todo} from './todo';
import {projectList, Project} from './project';

let home = Project('Home');
projectList.add(home);

let todo1 = Todo('todo1', 'just checkin', 'today', 'Home');
todoList.add(todo1);
console.log(todo1);
console.log(todoList.getList());
console.log(todoList.getTodo('todo1'));

home.addTodo(todo1);
todo1.edit('todo2', 'checkin edit', 'tomorrow', 'Home');
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
todoList.remove(todo1);

subtask.markAsCompleted();
todo1.markAsCompleted();
console.log(todo1.getTodo());
let subtasks = todo1.getTodo().checkList;
console.log(subtasks[0].getTodo());
