const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');

const app = express();

//configure db
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

//Use routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
