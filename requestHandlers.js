function start(response) {
	console.log("Request handler 'start' has been enabled.");
	response.write("");
}

function upload(response) {
	console.log("Request handler 'upload' has been enabled.");
}

exports.start = start;
exports.upload = upload;