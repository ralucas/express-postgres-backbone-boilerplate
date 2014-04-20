'use strict';

var app = app || {};

app.appCollection = Backbone.Collection.extend({
    
    model: app.appModel,
    
    url: ''

});
