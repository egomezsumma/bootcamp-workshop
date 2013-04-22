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

exports.install = function (app) {
  app.get('/doc/:id', function (req, res) {
    var doc = documentos[req.params.id];
    if (!doc) {
      res.send(404);
    } else {
      res.json(doc);
    }
  });
};