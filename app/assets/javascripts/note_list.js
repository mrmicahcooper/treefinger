window.App = window.App || {};

(function(namespace){
  function NoteList(elementId){
    this.$el = $(elementId);
    this.taskId = null;
    this.bindEvents();
  }

  function notesPath(id){
    return "/tasks/" + id + "/notes"
  }

  NoteList.prototype.bindEvents = function(){
    this.$el.find('.new_note').on('click', 'input[type=submit]', $.proxy(this.createNote,this))
  }

  NoteList.prototype.loadNotes = function(taskId){
    this.taskId =  taskId
    $.get(notesPath(taskId), function(response){
      var notes = response.map(function(rawNote){
        return new App.Note(rawNote).partial()
      })
      $('#notes').addClass('active').find('ul.notes').html(notes);
    })
  }

  NoteList.prototype.createNote = function(){
    event.preventDefault();
    var $textarea = this.$el.find('textarea');
    $.ajax({
      url: notesPath(this.taskId),
      method: "POST",
      data: {
        note: {
          body: $textarea.val()
        }
      },
      success: $.proxy(function(rawNote){
        var note = new App.Note(rawNote);
        this.$el.find('.notes').append(note.partial());
        $textarea.val('').focus();
      },this)
    })
  };

  namespace.NoteList = NoteList;

})(App)
