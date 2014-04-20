'use-strict';

var api = require('./api');

var routes = function(app) {

    app.get('/heartbeat', api.heartbeat);

    app.get('/', api.home);

};

module.exports = routes;