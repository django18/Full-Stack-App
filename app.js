//console.log("Hey , this is the first page of node.js that I'm going to run using node !!!!");
//var color=require('./colors');

// var fs=require('fs')
// var childProcess=require('child_process')

// console.log("Algorith starting");
// var output=childProcess.spawn('node',['colors.js'],{
// 	stdio:'inherit'
// });
// console.log("Alfgorithm ended");
// console.log("Going to read the file");
// var fileContent=fs.readFileSync('Himani.txt');
// console.log(typeof fileContent);
// //console.log(fileContent);
// console.log("Done Reading the file");

//color.ask();
  
var express=require('express');
var path=require('path');
var app=express();
var routes=require('./api/routes');
app.set('port',3000);

app.use(function(req,res,next){
  console.log(req.url);
  next();
});
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',routes);
// app.get('/',function(req,res){
//   console.log("Go to homepage");
//   res
//      .status(200)
//      .send("HomePage");
// });  

// app.get('/home',function(req,res){
//   console.log("Go to homepage");
//   res
//      .status(200)
//      .sendFile(path.join(__dirname,'public','index.html'));
// }); 

// app.get('/json',function(req,res){
//   console.log("Go to homepage");
//   res
//      .status(200)
//      .json({"name":"Avinash"});
// }); 

function listenLoopback()
{
 var port=server.address().port;
 console.log("Listening on "+port);
}

var server=app.listen(app.get('port'),listenLoopback);



//console.log("App.js loaded listening on "+app.get('port'))
