var express = require('express');
var router = express.Router();
const db = require('../models');
const util = require('../helpers/util.js');

/* GET home page. */
router.get('/', function(req, res) {
  let currentUser = req.session.user;
  res.render('index', { title: "Trial App", currentUser: currentUser });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  delete req.session.user
  res.redirect('/')
})

router.post('/login', function(req, res, next) {
  let username = req.body.username
  let password = req.body.password
  db.Login.find({
    where: { username: username }
  })
  .then(user => {
    if( user.password == password ) {
      req.session.user = {
        username: username,
        role: user.role
      }
      res.redirect('/dashboard')
    } else {
      res.send('Wrong Password')
    }
  })
  .catch(err => {
    res.send('No such user. Please go back.')
  })
});

module.exports = router;
