var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/hello') {
    return res.end('hola mundo');
  }

  if (req.url === '/bye') {
    return res.end('chau mundo');
  }

  res.statusCode = 404;
  res.end();
}).listen(8080, function () {
  console.log('listening on http://localhost:8080');
});