
describe("Contacts Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";

	describe("create update contact", function(){
		var idCreated;

		it("should get 404",function(done){

			request.get({
							url: base_url + "/badurl",
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(404);
							done();
					    });
		});
		it("should get 400",function(done){

			request.get({
							url: contacts_url + "?id=500",
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(404);
							done();
					    });
		});
		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){
		    		    	console.log(body);
							expect(response.statusCode).toBe(200);
							console.log(body);
							idCreated = body;
							done();
					    });
		});

		it("should retrieve contact",function(done){

			request.get({
							url: contacts_url + "/" + idCreated,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							expect(body.firstName).toBe("jagan");
							done();
					    });
		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.phone = "32003200";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							expect(body.firstName).toBe("jagan");
							expect(body.phone).toBe("32003200");
							done();
					    });
		});
	});

});
