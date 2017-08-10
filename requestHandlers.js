function start(response) {
	console.log("Request handler 'start' has been enabled.");
	response.write("Request handler 'start' has been enabled.");
}

function upload(response) {
	console.log("Request handler 'upload' has been enabled.");
	response.write("Request handler 'start' has been enabled.");
}

exports.start = start;
exports.upload = upload;