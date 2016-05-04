var assert = require('chai').assert;
var server = require('../app/server');
var http = require('http');

describe('/', function () {
	before(function () {
	server.listen(8000);
	});

	after(function () {
	server.close();
		});
	it('should return 200', function (done) {
		http.get('http://localhost:8000', function (res) {
		  assert.equal(200, res.statusCode);
		  done();
		});
	});

	it('should say "Hello, world!"', function (done) {
		http.get('http://localhost:8000', function (res) {
		  var data = '';
			res.on('data', function (chunk) {
				data += chunk;
			});

		  	res.on('end', function () {
			    assert.equal('<html><body><h1>Hello, World!</h1></body></html>', data);
			    done();
		  	});
	});
	});
});