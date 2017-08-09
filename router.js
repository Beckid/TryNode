function route(path_name, handle) {
	console.log('About to route for a request to ' + path_name);

	if (typeof handle[path_name] === 'function') {
		handle[path_name]();
	} else {
		console.log('No handler available for the requested path name.');
	}
}

exports.route = route;