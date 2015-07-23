var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

function handleRequest(request, response){
	var bodyStr = "";

	request.on('data',function(chunk){
		console.log("recvd " + chunk.toString())
		bodyStr += chunk.toString();
	});

	request.on('end', function() {

		var str = "Received " + request.method + " request for " + request.url + " body: " + bodyStr;
		console.log(str);

		response.end(str);
	});

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("server listening on port " + PORT);



});