var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.end("Hello, world! This is my first web application with Node.js!");
}).listen(4000);

console.log('The server is running at http://localhost:4000/');