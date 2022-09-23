import express from 'express';
import transactions from './transactions/transactions.route';
// const auth = require('./auth/auth.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Root level for API',
  });
});

router.use('/transactions', transactions);
// router.use('/auth', auth);

export default router;
