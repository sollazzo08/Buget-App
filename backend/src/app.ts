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

// Generic typed response, we omit 'json' and we add a new json method with the desired parameter type
type TypedResponse<T> = Omit<Response, 'json'> & { json(data: T): Response };
// An example of a typed response
type AppResponse = TypedResponse<{ 
    message?: String,
}>


app.get('/', (req: Express.Response, res: AppResponse) => {
  res.json({
    message: 'Hello There'
  })
});

app.use('/api/v1', api);

module.exports = app;
