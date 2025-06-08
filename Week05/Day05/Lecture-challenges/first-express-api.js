const express = require('express');
const app = express();

app.get('/api/greetings', (req, res) => {
  res.json({ message: 'Hello Sara! This is your first API 🎉' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
