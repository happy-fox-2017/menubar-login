var express = require('express');
var db = require('../models')
var helper = require('../helpers/roles')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let currUser = req.session.user
  if (currUser) {
    res.render('index', { title: `Session punya ${currUser.username}`, session : currUser});
  } else {
    res.render('index',{ title: `Kamu belum login`, session: 'not login'})
  }
});

router.get('/login', function (req,res) {
  res.render('login')
})

router.post('/login', function (req,res) {
  let _username = req.body.username
  let _password = req.body.password
  db.User.findOne({where : {
    username : _username,
    password : _password
  }})
  .then(user => {
    if (user) {
      req.session.user = {username : _username, role:user.role, menu:helper.checkRole(user.role)}
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/logout', function (req,res) {
  delete req.session.user
  res.redirect('/')
})



module.exports = router;
