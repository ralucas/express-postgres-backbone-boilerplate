'use strict';

var Bookshelf = require('bookshelf'),
    config    = require('../config');

Bookshelf.PG = Bookshelf.initialize({
    client: 'pg',
    connection: {
        host: config.get('database:host'),
        user: '',
        password: '',
        database: '',
        charset: 'utf-8'
    }
});

module.exports = Bookshelf.PG;
