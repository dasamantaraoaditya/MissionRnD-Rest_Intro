
describe("Calculator Http Service", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var sum_url = base_url + "/calculator/sum";

	describe("get sum of 2 numbers", function(){

		it("should return 8",function(done){

			var url = sum_url + "?op1=3&op2=5";
		    
		    request.get(url, function(error, response, body){

				expect(response.statusCode).toBe(200);
				expect(parseInt(body)).toBe(8);

				done();
		    });
		});

	});

	describe("post sum of 2 numbers", function(){

		it("should return 8",function(done){

			var sumBody = new Object();
			sumBody.op1 = 3;
			sumBody.op2 = 5;

		    request.post({url: sum_url,
		    			  body: sumBody,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							expect(body).toBe(8);
							done();
					    });
		});

	});

});
