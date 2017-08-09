// Require our own defined 'server' module.
var server = require('./server');
// Reuqire our own defined 'router' module.
var router = require('./router');

server.start(router.route);