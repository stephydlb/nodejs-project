// imports
var express = require('express')

// instantiate server
var server = express();

// configure routes
server.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Hello stephane World</h1>'); //200 correspond au succes de la requette 
})

// start server
server.listen(3000, function () {
  console.log('Server listening on port 3000')
});