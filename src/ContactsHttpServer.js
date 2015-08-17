/*
* OVERVIEW: In this activity, you will implement a REST service to manage contacts. The rest service will store/retreve contacts 
* in a mysql database. The rest service will implement the following operations:

	GET /contacts/id – This will read the specified contact from the mysql database and return it in the response.
	Format for the Response body is:
	{"firstName":"Bill","lastName":"Gates","phone":"32003200"}

	POST /contacts – This will accept a JSON payload, create the contact in mysql database and return id in the response. 
	Format of JSON request body is: {"firstName":"Bill","lastName":"Gates","phone":"32003200"}
	Format of the JSON response is: {<id-of-new-contact}

	PUT /contacts/id – This will update the specified contact’s details with the details in the JSON payload.
	Only fields that are specified in the request body need to be updated. Other fields of that contact should
	remain unchanged.
	Format of JSON request body is: {"firstName":"Bill","lastName":"Gates","phone":"32003200"}
	Format of the JSON response is: {<id-of-new-contact}

* ERROR CASES: Handle all error cases including:
*		Any Url other than urls shown above should return 404
*		Return bad request if any query string parameters are passed.
*		Return 404 if a non-existent contact id is passed.
*		Return 400 (bad request) if the body of POST/PUT requests does not exactly match the format given above.

* NOTES: 
      1) You need to include your solution to DbPersistence.js so you can read-write contacts from the mysql database.
      2) Please note that the casing of firstName/lastName in the http request/response is different from the casing of
         the corresponding fields in the mysqldb. You will need to handle how to convert results object from mysql into 
         the correct casing.
      3) Ensure you are starting the nodejs http server by running node ContactsHttpServer.js before running the tests.
*/

var mysql = require('mysql');
var db = require('./DbPersistence');
var url = require('url');
var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

// Add your code for the contact server below
