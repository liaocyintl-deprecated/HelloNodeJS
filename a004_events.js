// importing events module
var events = require('events');
// create eventEmitter object
var eventEmitter = new events.EventEmitter();

// event handler
var connectHandler = function connected() {
    console.log('Connection Established. ');

    // emit 'data_received' event
    eventEmitter.emit('data_received');
}

// register connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// regiester 'data_received' event
eventEmitter.on('data_received', function(){
    console.log('data received.');
});

// emit connection event
eventEmitter.emit('connection');

console.log("App Done.");