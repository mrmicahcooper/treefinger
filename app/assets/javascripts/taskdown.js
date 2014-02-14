var taskdown = {

  trackedKeys: { 13: 'enter', 9: 'tab' },

  normal: function(el){
    if(el.nodeName == 'SECTION'){
      document.execCommand('insertHTML', true, '<div class="title">')
    }
  },

  enter: function(el) {
    event.preventDefault();

    var $el              = $(el.parentNode),
    indent           = editor.indent(el.textContent),
    range            = editor.selection().getRangeAt(0)

    range.setEndAfter(el);

    var stringAfterCaret = range.extractContents().textContent;

    if (editor.shouldDoNothing(el)) {
      var caretPosition = editor.selection().baseOffset
      document.execCommand('insertText', true, stringAfterCaret)
      editor.setCaretTo(caretPosition)
      return false;
    }

    if (editor.doubleLineBreak(el)) {
      if (el.textContent == "") {
        document.execCommand('insertText', true, " ")
      }
      document.execCommand('insertHTML', true, '<div class=title>')
      document.execCommand('insertText', true, stringAfterCaret)
      editor.setCaretTo(0)
      return false;
    };

    if ($el.hasClass('title')){
      var description = editor.getDescription(el)
      if (description){
        var currentText = description.text()
        description.html(indent + stringAfterCaret + "\n" + currentText)
        editor.setCaretTo(1, description.get(0))
      }
      else{
        document.execCommand('insertHTML', true, '<div class=description>')
        document.execCommand('insertText', true, indent + stringAfterCaret)
        editor.setCaretTo(1)
      }
      treefinger.saveTask(el);
    }

    if ($el.hasClass('description')){
      document.execCommand('insertHTML', true, "\n" +indent + stringAfterCaret)
      editor.setCaretTo( editor.indentPosition(el.textContent, stringAfterCaret))
      return false;
    }
  },

  tab: function(el) {
    event.preventDefault();
    if(el.nodeName != 'SECTION'){
      document.execCommand('insertText', true, "  ")
    }
  },


}
