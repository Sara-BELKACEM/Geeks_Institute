const express = require("express");
const session = require("express-session");
const quizRouter = require("./routes/quiz");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'quiz-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use("/quiz", quizRouter);
app.get("/", (req, res) => {
  res.redirect("/quiz");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

