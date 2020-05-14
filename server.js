// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const passport = require('./config/passport');
const session = require('express-session');
const logger = require("morgan");
// Server Port
const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gymbrodb", { useNewUrlParser: true });

// Set up morgan
app.use(logger('dev'));

// Set up express app to handle data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Passport and Session
app.use(session({secret: 'keyboard dog', resave: false}));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
}

// Connect server to routes
app.use(require("./routes/api-routes.js"));

// Run server
app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));