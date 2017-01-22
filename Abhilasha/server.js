// var express = require('express');

// var app = express();


// var http = require('http'),
//     fs = require('fs');
//     var main = require('./js/main')

// var server = http.createServer (function (req,res){
// 	console.log('request was made:' + req.url);
// 	res.writeHead(200);
// 	var myReadStream = fs.createReadStream(__dirname + '/index.html','utf-8');
// 	myReadStream.pipe(res);
// });

// server.listen(3000,'127.0.0.1');
// console.log("server has started");
var express = require('express');
var app = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/static/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/youvscomputer',function(req,res){
  res.sendFile(path.join(__dirname+'/static/youvscomputer.html'));
});

app.get('/moreoptionstoplay',function(req,res){
  res.sendFile(path.join(__dirname+'/static/moreoptionstoplay.html'));
});

app.use(express.static(__dirname + '/static'));
var port = process.env.PORT || 8000;

app.listen(port);

console.log("Running at Port 8000");