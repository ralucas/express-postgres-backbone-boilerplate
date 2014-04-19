'use-strict';

var routes = function(app) {

    app.get('/heartbeat', function(req, res, next) {
        res.json(200, { "greeting": "Hello" });
    });

    app.get('/', function(req, res, next) {
        res.send('Hello All');
        next();
    });

};

module.exports = routes;