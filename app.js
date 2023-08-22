var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Meu primeiro app NodeJS, diana');
}).listen(8080); 