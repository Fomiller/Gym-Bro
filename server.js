// Dependencies
const express = require("express");
const mongoose = require('mongoose');

// Server Port
const PORT = process.env.PORT || 8080;
const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrainerDB", {useNewUrlParser: true});

// Set up express app to handle data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Connect server to routes
require("./routes/api-routes.js")(app);

// Run server
app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));