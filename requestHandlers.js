var process = require("child_process");

function start(response) {
	console.log("Request handler 'start' has been enabled.");

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
	
	response.write(body);
	response.end();	
}

function file(response) {
	console.log("Request handler 'start' has been enabled.");
	response.writeHead(200, { "Content-Type": "text/plain" });

	process.exec("ls -lah", function(err, stdout, stderr) {
		response.write(stdout);

		// Has to put this inside because this is a callback function.
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' has been enabled.");
	response.writeHead(200, { "Content-Type": "text/plain" });
	
	response.write("Request handler 'upload' has been enabled.");
	response.end();
}

exports.start = start;
exports.upload = upload;