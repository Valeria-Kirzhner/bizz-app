const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/biz_app_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));