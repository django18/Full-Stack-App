var express=require('express');
var router=express.Router();

router
.route('/json')
.get(function(req,res){
 res.json({"Data":"JSON_GET"}) ; 
})
.post(function(req,res){
 res.json({"Data":"JSON_POST"}) ; 
});

module.exports=router;