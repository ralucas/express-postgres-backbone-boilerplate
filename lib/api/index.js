'use strict';

var express = require('express');

var api = (function() {

    var heartbeat = function(req, res, next) {
        res.json(200, { "greeting": "Hello" });
    };

    var getFurnaces = function(req, res, next) {
        console.log(req.body);
        res.send('hi');
    };

    var home = function(req, res, next) {
        console.log('home');
        res.send('hi');
    }

    return {
        heartbeat: heartbeat,
        getFurnaces: getFurnaces,
        home: home
    };

}());

module.exports = api;