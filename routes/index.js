const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  // points to index.pug template.
  res.render('index');
});

module.exports = router;
