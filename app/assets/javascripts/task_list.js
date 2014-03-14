window.App = window.App || {};

(function(namespace) {
  function TaskList(project_id) {
    this.project_id = project_id;
    this.$el        = $('#tasks ul');
    this.tasks      = [];
    this.bindEvents();
    this.loadTasks();
  }

  TaskList.prototype.tasksPath = function() {
    return '/projects/' + window.project_id + '/tasks';
  }

  TaskList.prototype.bindEvents = function() {
    this.$el.on('click', '>li>.name', $.proxy(this.selected, this));
    this.$el.on('click', '>li>.actions>.notes', $.proxy(this.noted, this));
    this.$el.on('click', '>li>.actions>.status', $.proxy(this.updateStatus, this));
  }

  TaskList.prototype.noted = function(event){
    event.stopPropagation()
    var $target = $(event.target).closest('li');
    var id      = $target.data('id');

    this.$el.find('li').removeClass('noted');
    $target.closest('li').addClass('noted');
    $(this).trigger('toggleNote', [id]);
  }

  TaskList.prototype.updateStatus = function(event) {
    var $target = $(event.target)
    var id      = $target.closest('li').data('id');
    var task    = this.findTaskById(id)
    task.updateStatus($target.text())
  }

  TaskList.prototype.selected = function(event) {
    event.stopPropagation()
    var $target = $(event.target).closest('li');
    var id      = $target.data('id');

    $target.toggleClass('active')
    $(this).trigger('toggleSelected', [id]);
  }

  TaskList.prototype.findTaskById = function(id){
    return this.tasks.find(function(task){
      return task.id == id;
    });
  }

  TaskList.prototype.loadTasks = function() {
    $.get(this.tasksPath(), $.proxy(this.taskResponse, this))
  }

  TaskList.prototype.taskResponse = function(response) {
    response.map($.proxy(function(rawTask){
      newTask = new App.Task(rawTask, true)
      this.$el.append(newTask.taskListItem());
      $('#editor').append(newTask.editorView());
      this.tasks.push(newTask);
      return newTask;
    }, this));
  }

  TaskList.prototype.createTask = function(task, index){
    if(index == 0)
      this.$el.prepend(task.taskListItem());
    else
      this.$el.find('li').eq(index - 1).after(task.taskListItem());
  }

  TaskList.prototype.updateTask = function(taskResponse) {
    var $a = this.$el.find('li[data-id='+taskResponse.id+'] a.name');
    $a.html(taskResponse.name)
  }

  namespace.TaskList = TaskList;
})(App);
