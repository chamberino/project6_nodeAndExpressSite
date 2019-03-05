// Require Express as a dependency
const express = require('express');
// Require bodyParser
const bodyParser = require('body-parser');
//Require cookie-parser
const cookieParser = require('cookie-parser');
const path = require('path');
const port = 3000;
// App holds a reference to Express Object
const app = express();

// Import data
const data = require('./data.json').projects;

app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('views', path.join(__dirname, 'views'));
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


app.use((req, res, next) => {
  const err = new Error('Not Found');
  //Add a property of status to err object and set it to 500. status isn't a special name. The name is arbitrary.
  err.status = 404;
  console.error(err)
  next(err);
})

app.use((err, req, res, next) => {
  // const err = new Error('Not Found');
  //local is sent on response object
  res.locals.error = err;
  //call the err.status property
  res.status(err.status);
  //the error object has properties that hold the data about the error so we can pass that in as the second argument to the render function
  console.error(err);
  res.render('error');
})

app.listen(port, () => {
});
