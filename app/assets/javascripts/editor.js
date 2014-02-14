var editor = {

  getDescription: function(el){
    var $nextEl = $(el.parentElement.nextElementSibling)
    if ($nextEl.hasClass('description')){ return $nextEl }
    return false;
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

  setCaretTo: function(caretPosition, el) {
     var selection = this.selection(),
         newRange  = this.range(),
         startNodeElement = el ? el.childNodes[0] : newRange.commonAncestorContainer;

    newRange.setStart(startNodeElement, caretPosition)
    newRange.setEnd(startNodeElement, caretPosition)
    selection.removeAllRanges()
    selection.addRange(newRange)
  },

  shouldDoNothing: function(el){
    if((el.parentNode.className == 'title' || $(el).hasClass('title')) && el.textContent.trim() == ""){
      return true
    }
  }

}
