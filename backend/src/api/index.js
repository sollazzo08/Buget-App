const express = require('express');

const auth = require('./auth/auth.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Root level for API',
  });
});

router.use('/auth', auth);

module.exports = router;
