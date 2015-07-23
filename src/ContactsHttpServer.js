var mysql = require('mysql');
var db = require('./DbPersistence');
var url = require('url');
var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

function getIdFromUrl(request){
	// Url is of form http://localhost:3000/contacts/32
	// Split the string to extract the id.
	// split("/") will return ["",contacts","3"]

}

function handleContactsRequest(request,body, response){
}

function handleRequest(request, response){

	request.on('data',function(chunk){
		console.log("recvd " + chunk.toString())
	});

	request.on('end', function() {

	});

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("server listening on port " + PORT);



});