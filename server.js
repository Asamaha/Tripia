var express = require('express');
var bodyParser=require('bodyParser');
var app = express();
var router=require('./server/router');

//set port variable to deployed port or 3000 for local host
var port=process.env.PORT || 3000;

//set dirname to client folder to serve static assets (index.html)s
app.use('/',express.static(__dirname + '/client'));

//parses all incoming data from strings to JSON
app.use(bodyParser.json());

//Send all calls to router function
app.use(router);

app.listen(port, function() {
  console.log("Listening on port " + port + "...");
});