'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

app.get('/person', (req, res) => {
    let person = {
        'name': 'John Doe',
        'age': 45
    };
    res.send(person);
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is listening on port 3000 ...');
});
