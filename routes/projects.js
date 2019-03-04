const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // points to project.pug template.
  // second parameter sends locals to template
  res.render('project', { prompt: "Howdy" });
});

module.exports = router;
