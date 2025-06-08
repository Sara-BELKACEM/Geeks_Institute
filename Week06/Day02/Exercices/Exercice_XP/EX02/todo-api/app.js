const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`To-Do API running at http://localhost:${port}`);
});
