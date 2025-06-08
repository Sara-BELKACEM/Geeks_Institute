export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName) {
    this.tasks.push({ name: taskName, completed: false });
  }

  completeTask(taskName) {
    const task = this.tasks.find(t => t.name === taskName);
    if (task) {
      task.completed = true;
    } else {
      console.log(`Task "${taskName}" not found.`);
    }
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((task, index) => {
      const status = task.completed ? "✅" : "❌";
      console.log(`${index + 1}. ${task.name} - ${status}`);
    });
  }
}
