window.App = window.App || {};

(function(namespace) {

function TreefingerApp() {
  this.taskList = new namespace.TaskList(window.project_id);
  this.editor = new namespace.Editor('#editor');

  $(this.editor).on('task', $.proxy(function(task) {
    this.taskList.addTask(task);
  }, this));
}

namespace.TreefingerApp = TreefingerApp;

})(App);

$(function(){
  var application = new App.TreefingerApp();
});

