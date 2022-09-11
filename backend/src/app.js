const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const cors = require('cors');

const api = require('./api');

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello',
  });
});

app.use('/api/v1', api);

module.exports = app;
