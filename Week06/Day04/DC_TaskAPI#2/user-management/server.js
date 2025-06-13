const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/users');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', userRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
