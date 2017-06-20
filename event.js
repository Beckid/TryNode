var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log("The connection to the server has been established.");
	eventEmitter.emit('data-received');
};

eventEmitter.on('connected', connectHandler);

eventEmitter.on('data-received', function () {
	console.log("The data has been received.");
});

eventEmitter.emit('connected');

console.log('Program completed.');