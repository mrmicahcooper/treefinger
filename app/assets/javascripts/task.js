window.App = window.App || {};

(function(namespace){
  Task = function(task, active){
    this.name        = task.name;
    this.description = task.description;
    this.id          = task.id;
    this.active      = task.active
    this._notes_path = "/tasks/"+this.id+"/notes";
  };

  Task.prototype.taskClass = function(){
    return this.active ? "class='task active'" : "class='task'"
  }

  Task.prototype.activeClass = function(){
    return this.active ? "class='active'" : ""
  }

  Task.prototype.taskListItem = function(){
    return this._tasklistItem || (this._taskListItem = $(this.taskListView()));
  }

  Task.prototype.taskListView = function(){
    var view = "";

    view += "<li "+this.activeClass()+" data-id='"+this.id+"'>"
    view += "<div class='left_arrow'></div><div class=right_arrow></div>"
    view += "<a class='name'>"+this.name+"</a> <a class='notes'>notes</a>"
    view += "</li>"

    return $(view)
  };


  Task.prototype.editorPartial = function(){
    var view = "";

    view += "<div data-id='"+this.id+"'" + this.taskClass() + "'>";
    view += "<div class='title'>"+this.name+"</div>";
    view += "<div class='description'>"+this.description+"</div>";
    view += "</div>";

    return view;
  }

  namespace.Task = Task;

}(App));
