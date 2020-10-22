var UserModel = require('../model/user')

var register = (req,res,next) => {
  var body = req.body
  UserModel(body).save().then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
      })
    }else{
      res.json({
        code : -1,
        errmsg : '注册失败',
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : '注册失败',
    })
  })
}
var login = (req,res,next) => {
  var body = req.body
  UserModel.findOne(body).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
      })
    }else{
      res.json({
        code : -1,
        errmsg : '登录失败',
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : '登录失败',
    })
  })
} 


module.exports = {
  register,
  login
}