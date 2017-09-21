var newsData=require('../data/news-data.json');

module.exports.getAllNews=function(req,res){
res
.status(200)
.json(newsData);
};

module.exports.getOneNews=function(req,res){
var id=req.params.title;
var news=newsData[id];
res
.status(200)
.json(news);
};