function authUser(req,res,next) {
  let _username = req.body.username
  let _password = req.body.password
  db.User.findOne({where : {
    username : _username,
    password : _password
  }})
  .then(user => {
    if (user) {
      req.session.user = {username : _username, role:user.role, menu:helper.checkRole(user.role)}
      next()
    } else {
      let err = new Error("user not registered")
      next(err)
    }
  })
  .catch(err => {
    console.log(`err`);
}
