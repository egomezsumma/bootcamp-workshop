var http    = require('http');
var express = require('express');
var app     = express();

app.configure(function (){
  this.set("view engine", "jade");
  this.set("views", __dirname + "/views");
});

var documents = {
  '12345': {
    id: '12345',
    content: 'Documento 12345, blabliblo'
  },
  '67891': {
    id: '67891',
    content: 'Documento 67891, blabliblo'
  }
};

app.get('/doc/:id', function (req, res) {
  var doc = documents[req.params.id];
  if (!doc) {
    res.send(404);
  } else {
    res.render('doc', doc);
  }
});

http.createServer(app)
    .listen(8080, function () {
      console.log('listening on http://localhost:8080');
    });