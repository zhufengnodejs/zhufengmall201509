var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  User.findOne({username:username},function(err,user){
    if(err){
      res.status(500).json({msg:err});
    }else{
      if(user){
        req.session.user = user;
        res.json(user);
      }else{
        User.create({username:username},function(err,user){
          if(err){
            res.status(500).json({msg:err});
          }else{
            req.session.user = user;
            res.json(user);
          }
        })
      }
    }
  });
});

module.exports = router;
