window.App = window.App || {};

(function(namespace){
  function NoteList(elementId){
    this.$el = $(elementId)

  }

  function notesPath(id){
    return "/tasks/" + id + "/notes"
  }

  NoteList.prototype.loadNotes = function(taskId){
    $.get(notesPath(taskId), function(response){
      var notes = response.map(function(rawNote){
        return new App.Note(rawNote).partial()
      })
      $('#notes ul.notes').html(notes);
    })

  }

  namespace.NoteList = NoteList;

})(App)
