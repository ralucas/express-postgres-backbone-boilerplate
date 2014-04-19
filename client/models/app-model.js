var app = app || {};

app.appModel = Backbone.Model.extend({

    initialize: function() {
        this.setStates();
        this.setZones();
    },

    setStates: function() {
        this.set({states: ["AK","AL","AR","AS",
            "AZ","CA","CO","CT","DC","DE","FL",
            "GA","GU","HI","IA","ID","IL","IN",
            "KS","KY","LA","MA","MD","ME","MH",
            "MI","MN","MO","MS","MT","NC","ND",
            "NE","NH","NJ","NM","NV","NY","OH",
            "OK","OR","PA","PR","PW","RI","SC",
            "SD","TN","TX","UT","VA","VI","VT",
            "WA","WI","WV","WY"]});
    },

    setZones: function() {
        this.set({zones: [1,2,3,4,5]});
    }

});
