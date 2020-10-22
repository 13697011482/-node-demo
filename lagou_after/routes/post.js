var express = require('express');
var router = express.Router();
var ControllerPost = require('../controller/post')

router.post('/add' , ControllerPost.add)
router.get('/list' , ControllerPost.list)

module.exports = router