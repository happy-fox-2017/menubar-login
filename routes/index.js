var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup')
})

router.post('/signup', function(req, res, next) {
  let body = req.body
  if (body.password == body.confPassword) {
    db.User.create({
      username: body.username,
      email: body.email,
      pasword: body.password,
      role: 'user'
    })
    .then(() => {
      res.redirect('/')
    })
  } else {
    let err = new Error('Password did not match')
    next(err)
  }
})

router.post('/signin', function(req, res, next) {
  let body = req.body
  db.User.find({
    where: {
      username : body.username,
      pasword: body.password
    }
  })
  .then((user) => {
    if (body.password == user.pasword) {
      req.session.user = {
        username: body.username,
        role: user.role
      }
      res.render('home', {
        user:user
      })
    } else {
      let err = new Error('Password salah bro')
      next(err)
    }
  })
  .catch(() => {
    res.send('username not registered')
  })
})

// router.get('/home', function(req, res, next) {
//   res.render('home')
// })

router.get('/logout', function(req, res, next) {
  delete req.session.user
  res.redirect('/')
})

module.exports = router;
