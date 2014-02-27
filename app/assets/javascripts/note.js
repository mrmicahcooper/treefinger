var App = App || {};

(function(namespace){
  Note = function(note){
    this.username = note['username'];
    this.body = note['body'];
  }

  Note.prototype.partial = function(){
    return "<li><p class='username'>"+this.username+"</p><p class='note'>"+this.body+"</p></li>"
  }

  namespace.Note = Note;
}(App));
