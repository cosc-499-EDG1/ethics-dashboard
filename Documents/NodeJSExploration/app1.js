const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(e) {
    console.log('Listener called', e);
});

logger.log('message');