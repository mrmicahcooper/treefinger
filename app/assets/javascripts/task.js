window.App = window.App || {};

(function(namespace){
  Task = function(task, active){
    this.name        = task.name;
    this.description = task.description;
    this.id          = task.id;
    this.active      = task.active
    this.action      = task.action
    this._notes_path = "/tasks/"+this.id+"/notes";
  };

  Task.prototype.updatePath = function(){
    return "/projects/"+window.project_id+"/tasks/" + this.id
  }

  Task.prototype.taskClass = function(){
    return this.active ? "class='task active'" : "class='task'"
  }

  Task.prototype.activeClass = function(){
    return this.active ? "class='active'" : ""
  }

  Task.prototype.taskListItem = function(){
    return this._tasklistItem || (this._taskListItem = $(this.taskListView()));
  }

  Task.prototype.updateStatus = function(action){
    $.ajax({
      url: this.updatePath(),
      method: "put",
      data: { task: { status: action + 'ed' } },
      success: $.proxy(function(response){
        this._taskListItem.find('a.status').html(response.action)
      }, this)
    });
  }

  Task.prototype.taskListView = function(){
    var view = "";

    view += "<li "+this.activeClass()+" data-id='"+this.id+"'>"
    view += "<div class='left_arrow'></div><div class=right_arrow></div>"
    view += "<div class='actions'>"
    view += "<a class='status' href='#'>"+this.action+"</a>"
    view += "<a class='notes'>✏</a>"
    view += "</div>"
    view += "<a class='name'>"+this.name+"</a>"
    view += "</li>"

    return $(view)
  };


  Task.prototype.editorView = function(){
    var view = "";

    view += "<div data-id='"+this.id+"'" + this.taskClass() + "'>";
    view += "<div class='title'>"+this.name+"</div>";
    view += "<div class='description'>"+this.description+"</div>";
    view += "</div>";

    return view;
  }

  namespace.Task = Task;

}(App));
