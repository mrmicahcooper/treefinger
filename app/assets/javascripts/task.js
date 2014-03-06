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
    if(this.active)
      return 'task active'
    else
      return 'task'
  }

  Task.prototype.activeClass = function(){
    if(this.active)
      return "class='active'"
    else
      return ''
  }

  Task.prototype.taskListItem = function(){
    return this._tasklistItem || (this._taskListItem = $(this.listPartial()));
  }

  Task.prototype.listPartial = function(){
    var model = this;
    this.tasks = $list = $("<li "+this.activeClass()+"><div class='left_arrow'></div><div class=right_arrow></div><a class='name' data-id='"+this.id+"'>"+this.name+"</a><div class='actions'><a>notes</a></div></li>")
    if(model.active)
      $list.addClass('active')
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
    return "<div data-id='"+this.id+"' class='" +this.taskClass()+ "'><div class='title'>"+this.name+"</div><div class='description'>"+this.description+"</div></div>"
  }

  namespace.Task = Task;

}(App));
