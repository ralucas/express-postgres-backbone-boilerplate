var Bookshelf = require('./orm'),
    util      = require('util');

// Databases
var Eighty      = Bookshelf.Model.extend({ tableName: 'eighty' }),
    Ninety_Five = Bookshelf.Model.extend({ tableName: 'ninety_five' }),
    Ninety_Six  = Bookshelf.Model.extend({ tableName: 'ninety-six' });

var eighty = new Eighty({}).fetch().then(function(model) {
    console.log(model.get('zone1_low'));
});
