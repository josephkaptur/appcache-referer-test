http = require('http');
nodeStatic = require('node-static');

// Serve files in the current folder, setting the Cache-Control header to 0.
var staticFileServer = new nodeStatic.Server('./', {cache: 0});

http.createServer(function(req, res) {
  console.log(req.url + ' ' + (req.headers['referer'] || 'None'));
  req.addListener('end', function() {
    staticFileServer.serve(req, res);
  }).resume();
}).listen(8000);
