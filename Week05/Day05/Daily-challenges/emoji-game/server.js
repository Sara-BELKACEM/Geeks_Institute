const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🍕', name: 'Pizza' }
];

let scores = [];

try {
  scores = JSON.parse(fs.readFileSync('scores.json', 'utf-8'));
} catch {
  scores = [];
}

function getRandomEmoji() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  let options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(random.name)) options.push(random.name);
  }

  return {
    emoji: correct.emoji,
    correct: correct.name,
    options: shuffle(options),
  };
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

app.get('/emoji', (req, res) => {
  res.json(getRandomEmoji());
});

app.post('/guess', (req, res) => {
  const { guess, correct } = req.body;
  const isCorrect = guess === correct;
  res.json({ result: isCorrect });
});

app.post('/score', (req, res) => {
  const { name, score } = req.body;
  scores.push({ name, score });
  scores.sort((a, b) => b.score - a.score);
  fs.writeFileSync('scores.json', JSON.stringify(scores, null, 2));
  res.sendStatus(200);
});

app.get('/leaderboard', (req, res) => {
  res.json(scores.slice(0, 10));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
