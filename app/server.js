var http = require("http");

this.server = http.createServer(function (req, res) {
	var method = req.method;
	var url = req.url;
	var headers = req.headers;
	var body = [];
	//handling error
	req.on('error', function(err) {
	  // This prints the error message and stack trace to `stderr`.
	  console.error(err.stack);
	}).on('data', function(chunk) {
    body.push(chunk);
  	}).on('end', function() {
    body = Buffer.concat(body).toString();
	});

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('<html><body><h1>Hello, World!</h1></body></html>');
});

exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};