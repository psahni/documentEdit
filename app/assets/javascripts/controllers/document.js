App.Controllers.Documents = Backbone.Router.extend({
    routes: {
        "documents/:id":            "edit",
        "":                         "index",
        "new":                      "newDoc"
    },
    
    edit: function(id) {
        var doc = new Document({ id: id });
        doc.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: doc });
            },
            error: function() {
                new Error({ message: 'Could not find that document.' });
                window.location.hash = '#';
            }
        });
    },
    
    index: function() {
        $.getJSON('/documents', function(data) {
            if(data) {
                var documents = _(data).map(function(i) { return new Document(i); });
                new App.Views.Index({ documents: documents });
            } else {
                new Error({ message: "Error loading documents." });
            }
        });
    },
    
    newDoc: function() {
        new App.Views.Edit({ model: new Document() });
    }
});

/**
    The edit method is equally simple: it instantiates the Document with the given id, and then fetches the data for it from the 
    server. Upon success, we instantiate the App.Views.Edit view.


**/
