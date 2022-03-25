const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hola k ace');
});

module.exports = router;
