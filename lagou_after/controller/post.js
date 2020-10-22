var PostModel = require('../model/post')
var CountModel = require('../model/count')

var add = async (req,res,next) => {
  var body = req.body
  
  var { postId } = await CountModel.findOneAndUpdate({}, { $inc : { postId : 1 } }, { upsert : true , new : true}); 

  var data = {
    ...body,
    postId
  }

  PostModel(data).save().then((infos) => {
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
var find = (req,res,next) => {
  var postId = req.query.postId
  PostModel.findOne({postId}).then((info) => {
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
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : {}
    })
  })
}
var update = (req,res,next) => {
  var body = req.body
  var postId = req.query.postId
  PostModel.findOneAndUpdate({postId} , { $set : body }).then((info) => {
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
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : {}
    })
  })
}
var remove = (req,res,next) => {
  var postId = req.query.postId
  PostModel.deleteOne({postId}).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else {
      res.json({
        code : -1,
        errmsg : 'remove err',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'remove err',
      info : {}
    })
  })
}
module.exports = {
  add,
  list,
  find,
  update,
  remove
}