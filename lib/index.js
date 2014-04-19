'use strict';

var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express(),
    bodyParser = require('body-parser'),
    db      = require('./db-service'),
    server  = http.createServer(app);

var port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser());

// this serves up the client-side static html files
app.use(express.static( path.join(__dirname, '../client')));

app.get('/heartbeat', function(req, res, next) {
    res.json(200, { greeting: 'Hello' });
});

app.get('/', function(req, res, next) {
    console.log(req.body);
    //res.send('Hello All');
    next();
});

server.listen(port, function() {
    console.log('Server listening on port ' + port);
});

module.exports = app;