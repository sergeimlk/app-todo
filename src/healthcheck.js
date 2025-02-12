const express = require('express');
const router = express.Router();

router.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

module.exports = router;
