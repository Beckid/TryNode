var process = require("child_process");
var queryStr = require("querystring");
var fs = require("fs");

function start(response, data) {
	console.log("Request handler 'start' has been enabled.");

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea><br>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
	
	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(body);
	response.end();	
}

function file(response, data) {
	console.log("Request handler 'start' has been enabled.");
	response.writeHead(200, { "Content-Type": "text/plain" });

	process.exec("ls -lah", function(err, stdout, stderr) {
		response.write(stdout);

		// Has to put this inside because this is a callback function.
		response.end();
	});
}

function upload(response, data) {
	console.log("Request handler 'upload' has been enabled.");
	response.writeHead(200, { "Content-Type": "text/plain" });

	response.write("Request handler 'upload' has been enabled.\n\n");
	response.write("You have just entered: " + queryStr.parse(data).text);
	response.end();
}

function show(response, data) {
	console.log("Request handler 'show' has been enabled.");

	fs.readFile("/tmp/test.png", "binary", function(err, file) {
		if (err) {
			response.writeHead(500, { "Content-Type": "text/plain" });
			response.write("We have encountered an error: " + err + "\n");
			response.end();
		} else {
			response.writeHead(200, { "Content-Type": "image/png" });
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;