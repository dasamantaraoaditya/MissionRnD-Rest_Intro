//Tutorial file for the node-http project.
// Starts a simple http server and echoes
// it back in the response.

//do a require on the http module
var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

// callback function that will be passed to http.CreateServer() call
// This callback will handle all the request processing and send
// response.
function handleRequest(request, response){
	var bodyStr = "";

	//This is the onData event listener that
	// gets called when there is a body in the incoming
	// http request
	request.on('data',function(chunk){
		console.log("recvd " + chunk.toString())
		bodyStr += chunk.toString();
	});

	//Actual request processing is done as part of the onEnd event
	// listener as shown below.
	request.on('end', function() {

		var str = "Received " + request.method + " request for " + request.url + " body: " + bodyStr;
		console.log(str);

		var responseBody = new Object();
		responseBody.method = request.method;
		responseBody.incomingRequestUrl = request.url;
		if(bodyStr != "")
		{
			responseBody.incomingRequestBody = JSON.parse(bodyStr);
		}

		//response.end will send the response (including status and body)
		response.end(JSON.stringify(responseBody));
	});

}

// create an instance of http server and start listening.

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("server listening on port " + PORT);



});