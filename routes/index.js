var express = require('express');
var router = express.Router();
var db = require('../models');
const viewHelper = require('../helpers/displayMenuFor')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req,res) =>{
  res.locals.helper = viewHelper
  let data = req.body;
  db.Userlogin.findOne({
    where : {
      username : data.username,
      password : data.password
    }
  })
  .then(users =>{
    if (users != null ) {    
      req.session.login_user = {username:users.username, role:users.role}
      let userlogin = req.session.login_user
      res.render('mainmenu', {userlogin : userlogin});
    } else {
      res.redirect('/');
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/logout', (req,res) =>{
  delete req.session.login_user
  res.redirect('/')
})

router.get('/mainmenu', (req,res) =>{
  res.render('mainmenu',{title : "Test"})
})

module.exports = router;
