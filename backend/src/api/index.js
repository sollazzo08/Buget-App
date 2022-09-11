const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Root level for API',
  });
});

module.exports = router;
