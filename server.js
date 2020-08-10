// var http = require('http');

// http.createServer(function (request, response){
//     response.writeHead(200,{'Content-Type' : 'text/plain'});
//     response.write('Hello nodejs');
//     response.end();
// }).listen(8888);

var http = require('http');

var server = http.createServer();

server.addListener('request', function (request, response) {  
    console.log('requested...');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello nodejs');
    response.end();
});

server.addListener('connection', function(socket){  
    console.log('connected...');
});

server.listen(8888);
//node server.js로 서버를 열고 실행시켜야함