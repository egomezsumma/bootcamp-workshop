var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/hello') {
    return res.end('hello world');
  }

  if (req.url === '/bye') {
    return res.end('bye world');
  }

  res.statusCode = 404;
  res.end();
}).listen(8080, function () {
  console.log('listening on http://localhost:8080');
});