const express = require('express');
const app = express();
const booksRoutes = require('./server/routes/booksRoutes');

app.use(express.json());
app.use('/api/books', booksRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
