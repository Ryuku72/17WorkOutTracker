//NPM Packages
const express = require('express');
const chalk = require('chalk')
const mongoose = require('mongoose')
const app = express();

//Mongoose
const logger = require('morgan');
app.use(logger('dev'));

//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//PORT
const PORT = process.env.PORT || 8080;

//Routes
app.use(require('./routes/html-routes'))

//Listener
mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection
.once('open', () => console.log(chalk.green.bold('Connected to Mongoose')))
.on('error', error => {
    console.log(chalk.red('Your Error: ', error))
})
app.listen(PORT, function() {
  console.log(chalk.blue.bold('Access Granted || PORT: ') + chalk.yellow.bold(PORT));
  });