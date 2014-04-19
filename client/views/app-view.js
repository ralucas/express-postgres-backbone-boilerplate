var app = app || {};

app.appView = Backbone.View.extend({

    el: 'body',

    model: new app.appModel(),

    events: {
        'submit': 'showResults'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
        //return this;
    },

    template: _.template( $('#formTemplate').html() ),

    resultsTemplate: _.template( $('#results-template').html() ),

    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    }

    // showResults: function() {

    // }

});

var newView = new app.appView();