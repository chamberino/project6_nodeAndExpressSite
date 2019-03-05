const express = require('express');
const router = express.Router();

// Import projects json data
// const data = require('../data.json');
const data = require('../data.json');

router.get('/', (req, res) => {
  // const name = project
  // points to index.pug template.
  const projects = data["projects"];
  res.render('index', { projects });
});

module.exports = router;
