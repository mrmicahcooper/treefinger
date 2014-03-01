window.App = window.App || {};

(function(namespace) {
  function TaskList(project_id) {
    this.project_id = project_id;
    this.$el = $('#tasks ul');
    this.loadTasks();

  }

  TaskList.prototype.tasksPath = function() {
    return '/projects/' + window.project_id + '/tasks';
  }

  TaskList.prototype.loadTasks = function() {
    $.get(this.tasksPath(), $.proxy(this.taskResponse, this))
  }

  TaskList.prototype.taskResponse = function(response) {
    response.map($.proxy(function(rawTask){
      newTask = new App.Task(rawTask)
      this.$el.append(newTask.taskListItem());
      return newTask;
    }, this));
  }

  TaskList.prototype.addTask = function(task, index){
    if(index == 0)
      this.$el.prepend(task.taskListItem());
    else
      this.$el.find('li').eq(index - 1).after(task.taskListItem());
  }

  namespace.TaskList = TaskList;
})(App);
