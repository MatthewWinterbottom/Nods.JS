var http = require('http');
var fs = require('fs');


/*
myReadStream.on('data', (chunk) => {

    // When we're reading the stream, it will send over chunk, when the chunk is received it emits
    // And 'data' event. So we can listen out for the event using the 'data' event type.

    myWriteStream.write(chunk);
})
*/



 var server = http.createServer((req, res) => {

    console.log(`request was made from : ${req.url}`)

    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact-us') {
        res.writeHead(200, {'Content_Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api') {

        var employees = [{name: 'Tim', age: 21}, {name: 'clough-meister-general', age: 30}]
        res.writeHead(200, {'Content_Type': 'application/json'});
        res.end(JSON.stringify(employees))
    } else {
        res.writeHead(404, 'text/html');
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');