var http = require('http');

http.createServer(function (request, response) {

    // send HTTP header
    // HTTP status: 200 : OK
    // content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // response "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// print follows in the console
console.log('Server running at http://127.0.0.1:8888/');


// Then run it in "node a001_server.js"