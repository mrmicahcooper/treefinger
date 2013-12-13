var taskdown = {

  trackedKeys: {
    13: 'enter',
    9: 'tab'
  },

  normal: function(el){
    if(el.nodeName == 'SECTION'){
      document.execCommand('insertHTML', true, '<div class="title">')
    }
  },

  enter: function(el) {
    event.preventDefault();

    var $el              = $(el.parentNode),
    indent           = this.indent(el.textContent),
    range            = this.selection().getRangeAt(0)

    range.setEndAfter(el);

    var stringAfterCaret = range.extractContents().textContent;

    if (this.shouldDoNothing(el)) {
      var caretPosition = this.selection().baseOffset
      document.execCommand('insertText', true, stringAfterCaret)
      this.setCaretTo(caretPosition)
      return false;
    }

    if (this.doubleLineBreak(el)) {
      if (el.textContent == "") {
        document.execCommand('insertText', true, " ")
      }
      document.execCommand('insertHTML', true, '<div class=title>')
      document.execCommand('insertText', true, stringAfterCaret)
      this.setCaretTo(0)
      return false;
    };

    if ($el.hasClass('title')){
      if (!$(el.parentElement.nextElementSibling).hasClass('description')) {
        document.execCommand('insertHTML', true, '<div class=description>')
      }
      document.execCommand('insertText', true, indent + stringAfterCaret)
      this.setCaretTo(1)
      return false;
    }

    if ($el.hasClass('description')){
      document.execCommand('insertHTML', true, "\n" +indent + stringAfterCaret)
      this.setCaretTo( this.indentPosition(el.textContent, stringAfterCaret))
      return false;
    }
  },

  shouldDoNothing: function(el){
    if((el.parentNode.className == 'title' || $(el).hasClass('title')) && el.textContent.trim() == ""){
      return true
    }
  },

  tab: function(el) {
    event.preventDefault();
    if(el.nodeName != 'SECTION'){
      document.execCommand('insertText', true, "  ")
    }
  },

  doubleLineBreak: function(el){
    if (el.textContent.match(/^\s*$/gm)){ return true }
  },


  indent: function(text){
    if(matches = text.match(/^\s+/gm)){
      return matches.last().replace(/\n+/,'');
    }else{
      return " ";
    }
  },

  indentPosition: function(fullString, stringAfterCaret) {
    return fullString.length - stringAfterCaret.length
  },

  range: function(){
    return this.selection().getRangeAt(0)
  },

  selection: function(){
    return window.getSelection()
  },

  setCaretTo: function(caretPosition) {
    var newRange  = this.range(),
    selection = this.selection();

    newRange.setStart(newRange.commonAncestorContainer, caretPosition)
    newRange.setEnd(newRange.commonAncestorContainer, caretPosition)
    selection.removeAllRanges()
    selection.addRange(newRange)
  }

}
