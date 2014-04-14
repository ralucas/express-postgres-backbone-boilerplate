var app     = require('../lib'),
    request = require('supertest'),
    assert  = require('chai').assert,
    expect  = require('chai').expect,
    should  = require('chai').should;

describe('GET /heartbeat', function() {
    it('should be json', function(done) {
        request(app)
            .get('/heartbeat')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, result) {
                if (err) return done(err);
                done();
            });
    });
});

