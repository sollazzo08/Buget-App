import express, {Request, Response} from'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import api from './api';

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Test'
  })
});

app.use('/api/v1', api);

export default app;
