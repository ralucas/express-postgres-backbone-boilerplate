'use strict';

var app = app || {};

app.formView = Backbone.View.extend({

    el: 'div#form',

    initialize: function() {
        this.model = new app.formModel();
        this.render();
    },

    template: _.template( $('#formTemplate').html() ),

    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    }

});

var formView = new app.formView();
