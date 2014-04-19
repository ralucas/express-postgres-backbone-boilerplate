'use strict';

var app = app || {};

app.resultsView = Backbone.View.extend({

    el: 'form',

    events: {
        'submit': 'onSubmit'
    },

    initialize: function() {
        this.model = new app.resultsModel();
        console.log('model', this.model);

        //this.listenTo(this.model, 'submit', this.render);
    },

    template: _.template( $('#resultsTemplate').html() ),

    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    },

    onSubmit: function(e) {
        e.preventDefault();
        var formData = {};
        var datas = $('form').serializeArray();

        _.each(datas, function(data) {
            formData[data['name']] = data['value'];
        });
        console.log(formData);
        this.model.save(formData);
        // this.collection.fetch
    },

    renderResults: function() {
        this.$el.html(this.template( this.model.toJSON() ));
    }

});

var resultsView = new app.resultsView();
