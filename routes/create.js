// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' '

// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

// middleware

router.get('/snack', isLoggedIn, (req, res) => {
  console.log(isLoggedIn)
  res.render('./snack/snack')

  
});

router.post('/snack', isLoggedIn, (req, res) => {
db.user.findOrCreate({
  where: {
    name: req.user.name,
    email: req.user.email
  }
}).then(([returnedUser, created]) => {
  db.snack.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      imgUrl: req.body.imgUrl
    }
  }).then(([returnedSnack, created]) => {
    returnedUser.addSnack(returnedSnack).then( (relationInfo) => {
      res.redirect('/profile')
    })
  })
})
  res.redirect('/profile')
})

// exports
module.exports = router;