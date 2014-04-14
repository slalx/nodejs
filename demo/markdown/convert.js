var fs = require('fs'),
	Showdown = require('showdown'),
	http = require('http');




// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

  var markDownText = fs.readFileSync('./README.md').toString();
  var converter = new Showdown.converter();

  response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  console.log(converter.makeHtml(markDownText));
  response.write('<html><head><title>canvert markdown!</title></head><body>');
  response.write(converter.makeHtml(markDownText));
  response.write('</body></html>');
  response.end();

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


