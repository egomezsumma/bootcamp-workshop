var http    = require('http');
var express = require('express');

var app     = express();
var routes  = require('./routes');

routes.install(app);

http.createServer(app)
    .listen(8080, function () {
      console.log('listening on http://localhost:8080');
    });