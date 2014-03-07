window.App = window.App || {};

(function(namespace) {

function TreefingerApp() {
  this.taskList = new namespace.TaskList(window.project_id);
  this.editor = new namespace.Editor('#editor', window.project_id);
  this.noteList = new namespace.NoteList('#notes');

  $(this.editor).on('createTask', $.proxy(function(event, task, editorIndex) {
    this.taskList.createTask(task, editorIndex);
  }, this));

  $(this.editor).on('updateTask', $.proxy(function(event, taskResponse) {
    this.taskList.updateTask(taskResponse);
  }, this));

  $(this.taskList).on('toggleSelected', $.proxy(function(event, id){
    this.editor.displayTask(id);
  },this));

  $(this.taskList).on('toggleNote', $.proxy(function(event, taskId){
    this.noteList.loadNotes(taskId)
  },this));
}

namespace.TreefingerApp = TreefingerApp;

})(App);

$(function(){
  var application = new App.TreefingerApp();
});
