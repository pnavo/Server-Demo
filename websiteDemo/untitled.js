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
      displayRoot(urlParts.pathname, req, res);
      break;
    case "/movies":
      displayMovies(urlParts.pathname, req, res);
      break;
    case "/food":
      displayFood(urlParts.pathname, req, res);
      break;
    case "/css":
      displayCSS(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

function displayRoot(url,req,res){
	fs.readFile(__dirname + "/index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayMovies(){

}

function displayFood(){

}

function displayCSS(){

}