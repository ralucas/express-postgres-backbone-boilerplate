'use strict';

var app = app || {};

app.appView = Backbone.View.extend({

    el: 'body',

    initialize: function() {
        this.model = new app.appModel();
        this.render();
    },

    template: _.template(  ),

    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    }

});

var appView = new app.appView();
