var http    = require('http');
var express = require('express');

var app     = express();

//completar aquí

http.createServer(app)
    .listen(8080, function () {
      console.log('listening on http://localhost:8080');
    });