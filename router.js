function route(path_name, handle, response) {
	console.log('About to route for a request to ' + path_name);

	if (typeof handle[path_name] === 'function') {
		response.writeHead(200, { "Content-Type": "text/plain" });
		handle[path_name](response);
	} else {
		console.log('No handler available for the requested path name.');
		response.writeHead(404, { "Content-Type": "text/plain" });
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;