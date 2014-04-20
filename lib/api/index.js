'use strict';

var express = require('express');

var api = (function() {

    var heartbeat = function(req, res, next) {
        res.json(200, { "greeting": "Hello" });
    };

    var home = function(req, res, next) {
        console.log('home');
        res.send('hi');
    }

    return {
        heartbeat: heartbeat,
        home: home
    };

}());

module.exports = api;