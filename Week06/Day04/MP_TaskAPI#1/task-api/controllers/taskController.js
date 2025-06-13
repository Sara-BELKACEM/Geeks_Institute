const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

const readTasks = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Error reading tasks file');
  }
};

const writeTasks = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error('Error writing tasks file');
  }
};

exports.getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTaskById = (req, res) => {
  try {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id == req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'Title and description are required' });

  try {
    const tasks = readTasks();
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((t) => t.id == req.params.id);
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

    const task = tasks[taskIndex];
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    tasks[taskIndex] = task;
    writeTasks(tasks);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = (req, res) => {
  try {
    let tasks = readTasks();
    const newTasks = tasks.filter((t) => t.id != req.params.id);
    if (tasks.length === newTasks.length) return res.status(404).json({ error: 'Task not found' });

    writeTasks(newTasks);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
