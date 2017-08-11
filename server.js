// Import the HTTP module.
var http = require('http');
// Import the URL module.
var url = require('url');

function start(route, handle) {
	// Create an HTTP server.
	var server = http.createServer(function(request, response) {
		var path_name = url.parse(request.url).pathname;
		console.log("Request for " + path_name + " received");

		var postData = "";
		request.setEncoding("utf8");

		request.addListener("data", function(chunk) {
			postData += chunk;
			console.log("Received POST data " + chunk + ".\n");
		});

		request.addListener("end", function() {
			route(path_name, handle, response, postData);

		});

		console.log("");
	});

	// Can be accessed from localhost:8888
	server.listen(8888);

	// Print a message to the console.
	console.log("The server is running now. You can acceess it from http://localhost:8888/.\n");
}

exports.start = start;