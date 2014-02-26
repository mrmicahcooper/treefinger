var App = App || {};

(function(namespace){
  Task = function(task){
    this.name        = task['name'];
    this.description = task['description'];
    this.id          = task['id'];
    this._notes_path = "/tasks/"+this.id+"/notes";
  };

  Task.prototype.taskListItem = function(){
    return this._tasklistItem || (this._taskListItem = $(this.listPartial()));
  }


  Task.prototype.listPartial = function(){
    return "<li><div class='left_arrow'></div><div class=right_arrow></div><a class='name'>"+this.name+"</a><div class='actions'><a>notes</a></div></li>"
  };

  Task.prototype.editorPartial = function(){
    return "<div class='task'><div class='title'>"+this.name+"</div><div class='description'>"+this.description+"</div></div>"
  }

  namespace.Task = Task;

}(App));
