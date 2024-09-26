// imports
var express = require('express')
var bodyParser = require('body-parser') // ceci permet de recuperer les donnees du body de la requette http

// instantiate server
var server = express();

// Body parser configuration
server.use(bodyParser.urlencoded({ extended: true })); // pour recuperer les donnees du body de la requette http
server.use(bodyParser.json()); // server.use permet de configurer le serveur et bodyParser.json permet de recuperer les donnees du body de la requette http 

// configure routes
server.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Hello stephane World</h1>'); //200 correspond au succes de la requette 
})

// start server
server.listen(3000, function () {
  console.log('Server listening on port 3000')
});