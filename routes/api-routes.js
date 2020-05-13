const db = require('../models');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.get("/api/users", (req, res) => {
  res.send("all users");
});

router.post("/api/signup", (req, res) => {
  res.send("user signup");
});

module.exports = router;
