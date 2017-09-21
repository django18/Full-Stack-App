var express=require('express');
var router=express.Router();

var cntrlrNews=require('../controllers/controllers.allnews.js');

//console.log(cntrlrNews.getAllNews);

router
.route('/news')
.get(cntrlrNews.getAllNews);

router
.route('/news/:title')
.get(cntrlrNews.getOneNews);

module.exports=router;