const db = require('../models');
const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const hooks = require('../hooks');

router.get("/", (req, res) => {
  res.send("hello world");
});

// Exercise Routes
router.get('/api/exercises', (req,res) => {
  db.Exercise.find({})
  .then(Exercise => {
    res.json(Exercise);
  })
  .catch(err => {
    res.json(err)
  });
});

router.post('/api/exercises', ({body}, res) => {
  db.Exercise.create(body)
  .then(Exercise => {
    res.json(Exercise);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.delete('/api/exercises/:id', (req, res) => {
  db.Exercise.deleteOne({_id: req.params.id})
  .then(Exercise => {
    res.json(Exercise)
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put('/api/exercises', (req, res) => {
  db.Exercise.findOneAndUpdate({_id: req.body.id}, req.body)
  .then(Exercise => {
    res.json(Exercise)
  })
  .catch(err => {
    res.json(err)
  });
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
  newUser = new db.User(req.body);

  db.User.register(newUser, req.body.password, (err, user) => {
    if(err) {
      res.json({success: false, message: "User could not be created, Error:", err });
    } else {
      res.json(hooks.cleanUser(user));
    }
  });
});

router.post('/api/login', passport.authenticate('local'), async (req, res) => {
  // Passport authenticates the user and if the user login info is correct creates a req.user property in the req which is then used for the login...
  if (req.user) {
    const user = await db.User.findOne({email: req.user.email})
    console.log("SUCCESS!!!")
    return res.send(hooks.cleanUser(user));
  } else {
    console.log("username or password incorrect");
    res.json({success: false, message: 'username or password incorrect' })
  }
});

router.post('/api/logout', (req, res) => {
  req.logout();
  console.log('logging out');
  res.send('logged out');
});

module.exports = router;
