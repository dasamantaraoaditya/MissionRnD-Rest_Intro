var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

function getQueryParams(request){
}
function handleCalculatorRequest(request,body){
}

function handleRequest(request, response){
	request.on('data',function(chunk){
		console.log("recvd " + chunk.toString())
		bodyStr += chunk.toString();
	});

	request.on('end', function() {

	});

}
