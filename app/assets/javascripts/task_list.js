window.App = window.App || {};

(function(namespace) {
  function TaskList(project_id) {
    this.project_id = project_id;
    this.loadTasks();
  }

  TaskList.prototype.tasksPath = function() {
    return '/projects/' + window.project_id + '/tasks';
  }

  TaskList.prototype.loadTasks = function() {
    $.get(this.tasksPath(), $.proxy(this.taskResponse, this))
  }

  TaskList.prototype.taskResponse = function(response) {
    this.tasks = response.map(function(rawTask){
      newTask = new App.Task(rawTask)
      $('#tasks ul').append(newTask.taskListItem());
      return newTask;
    })
  }

  namespace.TaskList = TaskList;
})(App);
