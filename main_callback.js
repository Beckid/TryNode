var fs = require('fs');

fs.readFile('input.in', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data.toString());
});

console.log("This file has been received.");
console.log('============================');