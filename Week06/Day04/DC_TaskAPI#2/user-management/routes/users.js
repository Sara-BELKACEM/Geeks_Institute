const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const router = express.Router();
const USERS_FILE = './users.json';

function readUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  const users = readUsers();

  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) return res.status(400).send('Username already exists');

  const hashed = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    username,
    password: hashed
  };
  users.push(newUser);
  writeUsers(users);
  res.send('Hello Your account is now created!');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send('User name is not registered');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send('Incorrect password');

  res.send(`Hi ${username} welcome back again!`);
});

router.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

router.put('/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.send('User updated');
});

module.exports = router;
