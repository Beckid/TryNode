var process = require("child_process");
var queryStr = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(request, response) {
	console.log("Request handler 'start' has been enabled.");

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
	
	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(body);
	response.end();	
}

function file(request, response) {
	console.log("Request handler 'start' has been enabled.");
	response.writeHead(200, { "Content-Type": "text/plain" });

	process.exec("ls -lah", function(err, stdout, stderr) {
		response.write(stdout);

		// Has to put this inside because this is a callback function.
		response.end();
	});
}

function upload(request, response) {
	console.log("Request handler 'upload' has been enabled.");

	var form = new formidable.IncomingForm();
	console.log("About to parse the form.");
	form.parse(request, function(err, fields, files) {
		console.log("Parse finished.");
		fs.renameSync(files.upload.path, "./tmp/test.png");
		response.writeHead(200, { "Content-Type": "text/html" });
		response.write("Received image: <br>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(request, response) {
	console.log("Request handler 'show' has been enabled.");

	fs.readFile("./tmp/test.png", "binary", function(err, file) {
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