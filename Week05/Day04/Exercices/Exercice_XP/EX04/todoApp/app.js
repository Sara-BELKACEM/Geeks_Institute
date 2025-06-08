import { TodoList } from './todo.js';

const myList = new TodoList();
myList.addTask("Finish homework");
myList.addTask("Go to the gym");
myList.addTask("Read a book");

myList.completeTask("Go to the gym");
myList.listTasks();
