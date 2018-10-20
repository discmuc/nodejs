'use strict';

const http = require('http');
let i = 0;

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.write('Hello world times ' + i);
    response.end();
    i++;
});

server.listen(3000, () => {
    console.log('Running server on port 3000 ...');
});
