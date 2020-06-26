const express = require('express');
const chalk = require('chalk')


const PORT = process.env.PORT || 8080;
const app = express();
// const MONGODB_URI = process.env.MONGODB_URI || "mongo://localhost/workout";

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
require('./routes/htmlroutes')(app)

// //connect to the Mongo DB
// mongoose.connect(MONGODB_URI);

//listener
app.listen(PORT, function() {
  console.log(chalk.blue.bold("Access Point || PORT: ") + chalk.yellow.bold(PORT));
  });