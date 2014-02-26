var App = App || {};

(function(namespace){
  Task = function(task){
    this.name = task['name'];
    this.description  = task['description'];
    this._id = task['id'];
    this._listItem;
    this._notes_path = "/tasks/"+this.id+"/notes";
  };

  Task.prototype.listItem = function(){
    return this._listItem || (this._listItem = $(this.listPartial()));
  }

  Task.prototype.notes = function() {
    return this._notes || this.getNotes();
  };

  Task.prototype.getNotes = function(){
    var self = this;

    $.get(self._notes_path,
      function(response){
        return response.map(function(rawNote){
          return new App.Note(rawNote)
        })
      }
    )

  };

  Task.prototype.listPartial = function(){
    return "<li><div class='left_arrow'></div><div class=right_arrow></div><a class='name'>"+this.name+"</a><div class='actions'><a>notes</a></div></li>"
  };

  Task.prototype.editorPartial = function(){
    return "<div class='task'><div class='title'>"+this.name+"</div><div class='description'>"+this.description+"</div></div>"
  }

  namespace.Task = Task;

}(App));
