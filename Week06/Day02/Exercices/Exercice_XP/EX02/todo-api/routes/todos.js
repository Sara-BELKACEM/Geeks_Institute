const express = require('express');
const router = express.Router();

let todos = [];
let currentId = 1;

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo = {
    id: currentId++,
    title,
    completed: completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ error: 'To-do not found' });
  }
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === todoId);
  if (index === -1) {
    return res.status(404).json({ error: 'To-do not found' });
  }
  const deleted = todos.splice(index, 1);
  res.json({ message: 'To-do deleted', todo: deleted[0] });
});

module.exports = router;
