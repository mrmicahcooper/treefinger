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
    this.$el.on('click', '>li>.notes', $.proxy(this.noted, this));
  }

  TaskList.prototype.noted = function(event){
    event.stopPropagation()
    var $target = $(event.target).closest('li');
    var id      = $target.data('id');

    this.$el.find('li').removeClass('noted');
    $target.closest('li').addClass('noted');
    $(this).trigger('toggleNote', [id]);
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
      $('#editor').append(newTask.editorPartial());
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
