'use strict';

var express    = require('express'),
    http       = require('http'),
    path       = require('path'),
    app        = express(),
    bodyParser = require('body-parser'),
    db         = require('./db/db-service'),
    routes     = require('./routes'),
    server     = http.createServer(app);

var port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser());

// this serves up the client-side static html files
app.use(express.static( path.join(__dirname, '../client')));

// Calls the routes
routes(app);

server.listen(port, function() {
    console.log('Server listening on port ' + port);
});

module.exports = app;
