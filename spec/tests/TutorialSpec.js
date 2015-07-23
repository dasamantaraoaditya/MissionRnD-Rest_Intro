
describe("Echo Http Service", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var calc_url = base_url + "/calculator";

	describe("echo get request", function(){

		it("should return the same",function(done){

			var url = calc_url + "?op1=3&op2=5";
		    
		    request.get(url, function(error, response, body){

				expect(response.statusCode).toBe(200);
				console.log(body);
				var jsonBody = JSON.parse(body);
				expect(jsonBody.method).toBe("GET");
				expect(url).toContain(jsonBody.incomingRequestUrl);
				done();
		    });
		});

	});

	describe("post sum of 2 numbers", function(){

		it("should return the same",function(done){

			var sumBody = new Object();
			sumBody.op1 = 3;
			sumBody.op2 = 5;

		    request.post({url: calc_url,
		    			  body: sumBody,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							var jsonBody = body; //JSON.parse(body);
							expect(jsonBody.method).toBe("POST");
							expect(calc_url).toContain(jsonBody.incomingRequestUrl);
							expect(jsonBody.incomingRequestBody.op1).toBe(sumBody.op1);
							expect(jsonBody.incomingRequestBody.op2).toBe(sumBody.op2);
							done();
					    });
		});

	});

});
