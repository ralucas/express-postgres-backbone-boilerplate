var appView = Backbone.View.Extend({

    tagName: 'form',

    model: 'appModel',

    events: {
        'submit': 'showResults'
    },

    template: _.template( $('#form-template').html() ),

    resultsTemplate: _.template( $('#results-template').html() ),

    render: function() {

    },

    showResults: function() {

    }

});