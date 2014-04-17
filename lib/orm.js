var Bookshelf = require('bookshelf');

Bookshelf.PG = Bookshelf.initialize({
    client: 'pg',
    connection: {
        host: '127.0.0.1', //needs to change to env variable
        user: '',
        password: '',
        database: 'hhp',
        charset: 'utf-8'
    }
});

module.exports = Bookshelf.PG;
