var http = request('http');

http.createServer(function(request, response) {
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.write("Hello, world! This is my first page using Node.js HTTP server");
	response.end();
}).listen(8888);

console.log("The server is running now. You can acceess it from http://localhost:8888/.");