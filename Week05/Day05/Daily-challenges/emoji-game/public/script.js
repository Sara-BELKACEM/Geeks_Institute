let score = 0;
let currentEmoji = null;

function loadEmoji() {
  fetch('/emoji')
    .then(res => res.json())
    .then(data => {
      currentEmoji = data;
      const gameDiv = document.getElementById('game');
      gameDiv.innerHTML = `
        <div class="emoji">${data.emoji}</div>
        ${data.options.map(opt => `
          <button onclick="makeGuess('${opt}')">${opt}</button>
        `).join('')}
      `;
    });
}

function makeGuess(guess) {
  fetch('/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess, correct: currentEmoji.correct })
  })
    .then(res => res.json())
    .then(result => {
      const feedback = document.getElementById('feedback');
      if (result.result) {
        feedback.textContent = 'Correct!';
        score++;
      } else {
        feedback.textContent = `Wrong! Correct answer: ${currentEmoji.correct}`;
      }
      document.getElementById('score').textContent = score;
      setTimeout(loadEmoji, 1500);
    });
}

function saveScore(name) {
  fetch('/score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, score })
  }).then(() => {
    loadLeaderboard();
  });
}

function loadLeaderboard() {
  fetch('/leaderboard')
    .then(res => res.json())
    .then(data => {
      document.getElementById('leaderboard').innerHTML = `
        <h2>Leaderboard</h2>
        <ol>
          ${data.map(entry => `<li>${entry.name}: ${entry.score}</li>`).join('')}
        </ol>
      `;
    });
}

window.onload = () => {
  loadEmoji();
  loadLeaderboard();
};
