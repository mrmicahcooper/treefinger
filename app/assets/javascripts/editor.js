window.App = window.App || {};

(function(namespace) {
  function Editor(id) {
    this.$el = $(id);
    this.taskDown = new namespace.Taskdown(this)
    this.bindEvents();
  }

  Editor.prototype.bindEvents = function() {
    $(this.taskDown).on('task', $.proxy(function(task) {
      this.taskAdded(task);
    }, this));

    this.$el.keydown($.proxy(function(event){
      this.taskDown.keyDown(event.which, function() {
        event.preventDefault();
      });
    }, this));
  }

  Editor.prototype.taskAdded = function(task) {
    $(this).trigger('task', task);
  }

  namespace.Editor = Editor;
})(App)

