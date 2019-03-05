const express = require('express');
const router = express.Router();
// Import projects json data
const data = require('../data.json').projects;

router.get('/', (req, res) => {
    res.redirect('/')
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const project = data[id];
  const templateData = { project };

  // Add key/value pairs to templateData
  templateData.projectTitle = project.project_name;
  templateData.projectDescription = project.description;
  templateData.liveLink = project.live_link;
  templateData.githubLink = project.github_link;
  templateData.images = project.image_urls;
  templateData.landscapeImages = project.landscape_images;
  templateData.skills = project.technologies;

  // points to project.pug template.
  // second parameter sends locals to template
  res.render('project', templateData);
});

module.exports = router;
