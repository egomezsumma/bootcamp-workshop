var documents = {
  '12345': {
    id: '12345',
    contenido: 'Document 12345, blabliblo'
  },
  '67891': {
    id: '67891',
    contenido: 'Document 67891, blabliblo'
  }
};

exports.install = function (app) {
  app.get('/doc/:id', function (req, res) {
    var doc = documents[req.params.id];
    if (!doc) {
      res.send(404);
    } else {
      res.json(doc);
    }
  });
};