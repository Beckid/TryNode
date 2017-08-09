// Import the HTTP module.
var http = require('http');
// Import the URL module.
var url = require('url');

function start() {
	// Create an HTTP server.
	var server = http.createServer(function(request, response) {
		var request_url = request.url;
		var path_name = url.parse(request_url).pathname;
		console.log("Request for " + path_name + " received");

		response.writeHead(200, { "Content-Type": "text/plain" });
		response.write("Hello, world! This is my first page using Node.js HTTP server.");
		response.end();
	});

	// Can be accessed from localhost:8888
	server.listen(8888);

	// Print a message to the console.
	console.log("The server is running now. You can acceess it from http://localhost:8888/.");
}

exports.start = start;