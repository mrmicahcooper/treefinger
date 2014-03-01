window.App = window.App || {};

(function(namespace) {
  function Editor(elementId, projectId) {
    this.$el = $(elementId);
    this.taskDown = new namespace.Taskdown(this, projectId)
    this.bindEvents();
  }

  Editor.prototype.bindEvents = function() {
    $(this.taskDown).on('task', $.proxy(this.taskAdded, this));

    this.$el.keydown($.proxy(function(event){
      this.taskDown.keyDown(event.which, function() {
        event.preventDefault();
      });
    }, this));
  }

  Editor.prototype.taskAdded = function(event, task) {
    var $task = this.$el.find("[data-id=" + task.id + "]");
    var index = this.$el.find(".task").index($task);
    $(this).trigger('task', [task, index]);
  }

  namespace.Editor = Editor;
})(App)

