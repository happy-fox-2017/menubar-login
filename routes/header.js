var express = require('express');
var router = express.Router();

// router.get('/logout', function(req, res, next) {
//   delete req.session.user
//   res.redirect('/')
// })

router.get('/logout', function(req, res, next) {
  req.session.destroy()
  res.redirect('/')
})

router.get('/dashboard', function(req, res, next) {
  if (currentUser) {
    res.redirect('/dashboard')
  } else {
    res.send('You need to login first')
  }
})

module.exports = router;