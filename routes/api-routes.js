const db = require('../models');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.get("/api/users", (req, res) => {
  db.User.find({})
  .then(User => {
    res.json(User);
  })
  .catch(err => {
    res.json(err)
  });
});

router.post("/api/users", (req, res) => {
  db.User.create(req.body)
  .then(newUser => {
    res.json(newUser);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;
