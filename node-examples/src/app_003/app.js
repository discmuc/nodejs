'use strict';

const http = require('http'),
    path = require('path');

const express = require('express');

const logger = require('./logger');

const app = express();
const staticDir = path.join(__dirname, 'static');

app.use(logger({
        'level': 'info'
    }));

app.use('/', express.static(staticDir));

app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

app.get('/error', (req, res) => {
    res.status(500).send('Error occurred');
});

app.get('/blog/:year/:month/:day?', (req, res) => {
    const year = req.params.year,
    month = req.params.month,
    day = req.params.day || 1;

    const blog = {
        'year': year - 0, // '- 0' converts to number
        'month': month - 0,
        'day': day - 0
    };

    if(req.query.format === 'html') {
        res.send(`<h1>${blog.year}/${blog.month}/${blog.day}</h1>`);
        return;
    }
    res.send(blog);
});

app.get('/info', (req, res) => {
    res.send({
        'ip': req.ip,
        'protocol': req.protocol,
        'secure': req.secure,
        'method': req.method,
        'hostname': req.hostname,
        'path': req.path
    });
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
