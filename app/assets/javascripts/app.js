var App = App || {

  tasks_path: '/projects/' + window.project_id + '/tasks',

  init: function(){
    this.loadTasks();
  },

  loadTasks: function(){
    var self = this;
    $.get(
      this.tasks_path,
      function(response){
        self.tasks = response.map(function(rawTask){
          newTask = new App.Task(rawTask)
          $('#tasks ul').append(newTask.listItem());
          return newTask;
        }) }
    );
  }


};

$(function(){
  App.init();
});
