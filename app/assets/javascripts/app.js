window.App = window.App || {};

(function(namespace) {

function TreefingerApp() {
  this.taskList = new namespace.TaskList(window.project_id);
  this.editor = new namespace.Editor('#editor', window.project_id);

  $(this.editor).on('task', $.proxy(function(event, task, editorIndex) {
    this.taskList.addTask(task, editorIndex);
  }, this));
}

namespace.TreefingerApp = TreefingerApp;

})(App);

$(function(){
  var application = new App.TreefingerApp();
});

