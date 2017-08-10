var process = require("child_process");

function start(response) {
	console.log("Request handler 'start' has been enabled.");
	response.write("Request handler 'start' has been enabled.");

	process.exec("ls -lah", function(err, stdout, stderr) {
		response.write(stdout);
	});
}

function upload(response) {
	console.log("Request handler 'upload' has been enabled.");
	response.write("Request handler 'upload' has been enabled.");
}

exports.start = start;
exports.upload = upload;