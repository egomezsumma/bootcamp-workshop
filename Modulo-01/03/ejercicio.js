var http    = require('http');
var express = require('express');
var app     = express();

var documentos = {
  '12345': {
    id: '12345',
    contenido: 'Documento 12345, blabliblo'
  },
  '67891': {
    id: '67891',
    contenido: 'Documento 67891, blabliblo'
  }
};

//completar aquí

http.createServer(app)
    .listen(8080, function () {
      console.log('listening on http://localhost:8080');
    });