var express = require('express'),
    http    = require('http'),
    app     = express(),
    db      = require('./db-service'),
    server  = http.createServer(app);

var port = process.env.PORT || 3001;

app.get('/heartbeat', function(req, res) {
    res.json(200, { greeting: 'Hello' });
});

app.get('/', function(req, res) {
    res.send('Hello All');
});

server.listen(port, function() {
    console.log('Server listening on port ' + port);
});

module.exports = app;