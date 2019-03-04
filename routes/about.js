const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // points to about.pug template.
  // second parameter sends locals to template
  res.render('about', { prompt: "Howdy" });
});

module.exports = router;
