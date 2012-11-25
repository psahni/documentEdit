/*
    if it's a new unsaved model, then it should POST to /documents for a CREATE action, and if it's not new, then it should POST to /documents/ 
    id for an UPDATE action.
*/
var Document = Backbone.Model.extend({
    url : function() {
      var base = 'documents';
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }
});
