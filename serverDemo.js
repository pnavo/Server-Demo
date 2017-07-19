var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleGood(request, response){
	response.end("You're amazing! " + request.url)
}

function handleBad(request, response){
	response.end("You're adequate at best... " + request.url)
}

var server1 = http.createServer(handleGood);

server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});

var server2 = http.createServer(handleBad);

server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
});