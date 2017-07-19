var fs = require("fs");
var http = require("http");
var url = require("url");

var PORT = 1800

var server = http.createServer(handleRequest)

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(req, res) {
  var urlParts = url.parse(req.url);

  switch (urlParts.pathname) {
    case "/":
      fs.readFile(__dirname + "/home.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
	  });
      break;
    case "/movies":
      fs.readFile(__dirname + "/movies.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
	  });
      break;
    case "/food":
      fs.readFile(__dirname + "/food.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
	  });
      break;
    case "/css":
      fs.readFile(__dirname + "/css.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
	  });
      break;
  }
}