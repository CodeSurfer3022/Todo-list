import {todoList, Todo} from './todo';

let todo1 = Todo('todo1', 'just checkin', 'today', 'Home');
todoList.add(todo1);
console.log(todo1);
console.log(todoList.getList());
todoList.getTodo(todo1);

todo1.edit('todo2', 'checkin edit', 'tomorrow', 'default');
console.log(todoList.getTodo(todo1));

todo1.moveToProject('home');
todo1.reschedule('today');

let subTaskList = [];
let subtask = Todo('subtask1', 'do subtask', 'today', 'misc');
todoList.add(subtask);
subTaskList.push(subtask);
todo1.addChecklist(subTaskList);
console.log(todoList.getTodo(todo1));

console.log('output for mark');
todo1.markAsCompleted();
todoList.remove(todo1);

subTaskList.forEach(subtask => subtask.markAsCompleted());
todo1.markAsCompleted();
