// Require Express as a dependency
const express = require('express');
// App holds a reference to Express Object
const app = express();

// Import data
const data = require('./data.json').projects;

app.use('/static', express.static('public'));
// Sets the view engine to the pug.
// The app.set method defines different settings in Express.
// This line tells Express which template engine to use.
app.set('view engine', 'pug');


// Import routes to let app.js access routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

// Use routes variables to make middleware
app.use(mainRoutes);
//add a new projects route
app.use('/projects', projectRoutes);
//add a new about route
app.use('/about', aboutRoutes);

app.listen(3000, ()=> {
  console.log('hey buddy');
})
