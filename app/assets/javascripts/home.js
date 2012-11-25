// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Documents();
        Backbone.history.start();
    }
};

