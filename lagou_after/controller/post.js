var PostModel = require('../model/post')

var add = (req,res,next) => {
  var body = req.body
  console.log(body);
  PostModel(body).save().then((infos) => {
    if(infos){
      res.json({
        code : 0,
        errmsg : 'ok',
        infos
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        infos : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      infos : {}
    })
  })
}
var list = (req,res,next) => {
  var page = req.query.page;
  var count = 10;
  PostModel.find().sort({date : -1}).skip((page - 1) * count).limit(count).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : []
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : []
    })
  })
}

module.exports = {
  add,
  list
}