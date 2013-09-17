var http = require('http');

http.createServer(function (req, res) {
  res.end("HELLO HUMAN, I'M AN HTTP SERVER");
}).listen(8080, function () {
  console.log('listening on http://localhost:8080');
});