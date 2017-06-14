var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/',(req,res,next) =>{
  res.render('index',{})
})

router.post('/login', (req, res, next) => {
  db.User.findOne({
    where: {username: req.body.username, password: req.body.password}
  })
  .then( user => {
    if(req.body.password == user.password) {
      req.session.user= {
        username: req.body.username,
        role: user.role
      } 
      res.redirect('/home');
    }
    else {
      console.log('err');
    }
  })
}); 

router.get('/home',(req, res) => {
  res.render('home', {user: req.session.user, message: "", error: ""})
})

router.get('/logout',(req,res,next)=>{
  delete req.session.user
  res.redirect('/')
})

module.exports = router;
