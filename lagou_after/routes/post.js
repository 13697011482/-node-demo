var express = require('express');
var router = express.Router();
var ControllerPost = require('../controller/post')

router.post('/add' , ControllerPost.add)
router.get('/list' , ControllerPost.list)
router.get('/find' , ControllerPost.find)
router.post('/update' , ControllerPost.update)
router.post('/remove' , ControllerPost.remove)

module.exports = router