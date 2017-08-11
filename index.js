// Require our own defined 'server' module.
var server = require('./server');
// Require our own defined 'router' module.
var router = require('./router');
// Require our own defined 'requestHandlers' module.
var handlers = require('./requestHandlers');

var handle = {}
handle['/'] = handlers.start;
handle['/start'] = handlers.start;
handle['/upload'] = handlers.upload;
handle['/show'] = handlers.show;

server.start(router.route, handle);