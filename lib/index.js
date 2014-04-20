'use strict';

var express    = require('express'),
    http       = require('http'),
    path       = require('path'),
    app        = express(),
    bodyParser = require('body-parser'),
    routes     = require('./routes'),
    config     = require('./config'),
    server     = http.createServer(app);

var port = config.get('server:port');

// Middleware
app.use(bodyParser());

// this serves up the client-side static html files
app.use(express.static( path.join(__dirname, '../client')));

// Calls the routes
routes(app);

server.listen(port, function() {
    console.log('Server listening on port ' + port);
    console.log('Database hosted at ' + config.get('database:host'));
});

module.exports = app;
