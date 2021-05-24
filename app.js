const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/biz_app_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());// midelware that make all req & res in the app be JSON type only.

app.use('/api/users', users);


const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));