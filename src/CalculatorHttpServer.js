/*
* OVERVIEW: Implement a CalculatorService that supports the following http operations:
* 		GET /calculator/sum?op1=<num>&op2=<num>
*		POST /calculator/sum and response body is a json object {"op1":"<num1>","op2":"<num2>"}
*		
*		Both GET/POST opertions should return 200 code on success and the response body should be the
*		sum of the 2 numbers
*
* ERROR CASES: Handle all error cases including:
*		Any Url other than /calculator/sum should return 404. 
*		Return bad request if op1 and op2 are not numbers.

* NOTES: Ensure you are starting the nodejs http server by running node CalculatorHttpServer.js before running the tests.
*/

var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

// Add your code to startup http server and process request here.

