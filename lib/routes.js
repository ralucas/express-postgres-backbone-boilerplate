'use-strict';

var api = require('./api');

var routes = function(app) {

    app.get('/heartbeat', api.heartbeat);

    app.get('/', api.home);

    app.post('/api/furnaces', api.getFurnaces);

};

module.exports = routes;