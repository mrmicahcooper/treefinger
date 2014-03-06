window.App = window.App || {};

(function(namespace) {
  function Editor(elementId, projectId) {
    this.$el = $(elementId);
    this.taskDown = new namespace.Taskdown(this, projectId)
    this.bindEvents();
  }

  Editor.prototype.bindEvents = function() {
    $(this.taskDown).on('createTask', $.proxy(this.createTask, this));
    $(this.taskDown).on('updateTask', $.proxy(this.updateTask, this));

    this.$el.keydown($.proxy(function(event){
      this.taskDown.keyDown(event.which, function() {
        event.preventDefault();
      });
    }, this));

    this.$el.keyup($.proxy(function(event){
      this.taskDown.keyUp(event.which, function() {
        event.preventDefault();
      });
    }, this));

    this.$el.click($.proxy(function(event){
      this.taskDown.click();
    }, this));

  }

  Editor.prototype.createTask = function(event, task) {
    var $task = this.$el.find("[data-id=" + task.id + "]");
    var index = this.$el.find(".task").index($task);
    $(this).trigger('createTask', [task, index]);
  }

  Editor.prototype.updateTask = function(event, taskResponse){
    $(this).trigger('updateTask', [taskResponse]);
  }

  Editor.prototype.displayTask = function(id) {
    this.$el.find('div[data-id='+id+']').toggleClass('active');
  }

  namespace.Editor = Editor;
})(App)

