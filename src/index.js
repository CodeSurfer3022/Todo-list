import {todoList, Todo} from './todo';

let todo1 = Todo('todo1', 'just checkin', 'today', 'Home');
todoList.add(todo1);
console.log(todo1);
console.log(todoList.getList());
console.log(todo1.getTodo());

todo1.edit('todo2', 'checkin edit', 'tomorrow', 'default');
console.log(todo1.getTodo());

todo1.moveToProject('home');
todo1.reschedule('today');

let subTaskList = [];
subTaskList.push(Todo('subtask1', 'do subtask', 'today', 'misc'));
todo1.addChecklist(subTaskList);
console.log(todo1.getTodo());

console.log('output for mark');
todo1.markAsCompleted();
todoList.remove(todo1);

subTaskList.forEach(subtask => subtask.markAsCompleted());
todo1.markAsCompleted();
