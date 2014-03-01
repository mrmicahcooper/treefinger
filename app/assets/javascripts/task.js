window.App = window.App || {};

(function(namespace){
  Task = function(task){
    this.name        = task.name;
    this.description = task.description;
    this.id          = task.id;
    this._notes_path = "/tasks/"+this.id+"/notes";
  };

  Task.prototype.taskListItem = function(){
    return this._tasklistItem || (this._taskListItem = $(this.listPartial()));
  }

  Task.prototype.listPartial = function(){
    var model = this;
    $list = $("<li><div class='left_arrow'></div><div class=right_arrow></div><a class='name'>"+this.name+"</a><div class='actions'><a>notes</a></div></li>")
    $list.find('.actions a').click(function(){ model.loadNotes() })
    return $list
  };

  Task.prototype.loadNotes = function(){
    $.get(this._notes_path, function(response){
      var notes = response.map(function(rawNote){
        return new App.Note(rawNote).partial()
      })
      $('#notes ul.notes').html(notes);
    })
  }

  Task.prototype.editorPartial = function(){
    return "<div class='task'><div class='title'>"+this.name+"</div><div class='description'>"+this.description+"</div></div>"
  }

  namespace.Task = Task;

}(App));
