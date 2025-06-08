const express = require("express");
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

router.get("/", (req, res) => {
  req.session.currentQuestion = 0;
  req.session.score = 0;
  res.send(`
    <h2>Welcome to the Trivia Quiz!</h2>
    <form method="POST" action="/quiz">
      <p>${triviaQuestions[0].question}</p>
      <input name="answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post("/", (req, res) => {
  const { answer } = req.body;
  let index = req.session.currentQuestion || 0;

  const correctAnswer = triviaQuestions[index].answer.toLowerCase().trim();
  const userAnswer = answer.toLowerCase().trim();

  if (userAnswer === correctAnswer) {
    req.session.score += 1;
    feedback = `<p style="color: green;">Correct!</p>`;
  } else {
    feedback = `<p style="color: red;">Incorrect. The correct answer was: <b>${correctAnswer}</b></p>`;
  }

  index++;
  req.session.currentQuestion = index;

  if (index < triviaQuestions.length) {
    res.send(`
      ${feedback}
      <form method="POST" action="/quiz">
        <p>${triviaQuestions[index].question}</p>
        <input name="answer" required />
        <button type="submit">Submit</button>
      </form>
    `);
  } else {
    res.redirect("/quiz/score");
  }
});

router.get("/score", (req, res) => {
  const score = req.session.score || 0;
  res.send(`
    <h2>Quiz Finished!</h2>
    <p>Your final score is: <b>${score}/${triviaQuestions.length}</b></p>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;
