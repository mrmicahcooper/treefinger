var App = App || {};

(function(namespace){
  Task = function(task){
    this.name = task['name']
    this.description  = task['description']
    this.id = task['id']
  };

  Task.prototype.notes_path = function(){return "/tasks/"+this.id+"/notes"}

  Task.prototype.listPartial = function(){
    return "<li><div class='left_arrow'></div><div class=right_arrow></div><a class='name'>"+this.name+"</a><div class='actions'><a>notes</a></div></li>"
  };

  Task.prototype.editorPartial = function(){
    return "<div class='task'><div class='title'>"+this.name+"</div><div class='description'>"+this.description+"</div></div>"
  }

  Task.prototype.notes = function() {
    var self = this;

    if(this.taskNotes){
      return this.taskNotes
    }else{
      $.get(
        this.notes_path(),
        function(response){
          self.taskNotes = response.map(function(rawNote){
            return new App.Note(rawNote)
          })
        }
      )
      return this.taskNotes
    }
  }

  namespace.Task = Task;

}(App));
