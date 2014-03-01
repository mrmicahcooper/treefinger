window.App = window.App || {};

(function(namespace) {

  function getDescription(el){
    var $nextEl = $(el.parentElement.nextElementSibling)
    if ($nextEl.hasClass('description'))
      return $nextEl;
    return false;
  }

  function doubleLineBreak(el){
    if (el.textContent.match(/^\s*$/gm))
      return true;
  }


  function indent(text){
    if(matches = text.match(/^\s+/gm))
      return matches.last().replace(/\n+/,'');
    else
      return " ";
  }

   function indentPosition(fullString, stringAfterCaret) {
    return fullString.length - stringAfterCaret.length
  }

  function range(sel){
    if (sel)
      return sel.getRangeAt(0)
    else
      return selection().getRangeAt(0)
  }

  function selection(){
    return window.getSelection();
  }

  function setCaretTo(caretPosition, el) {
    var sel        = selection();
    var newRange         = range();
    var startNodeElement = el ? el.childNodes[0] : newRange.commonAncestorContainer;

    newRange.setStart(startNodeElement, caretPosition)
    newRange.setEnd(startNodeElement, caretPosition)
    sel.removeAllRanges()
    sel.addRange(newRange)
  }

  function outdentTask(){
    var sel = selection(),
        $el = $(sel.baseNode).closest('.task')

    $el.insertAfter($el.parent());
    setCaretTo(0, $el.get(0))
  }

  function hasTitle(el) {
    return el.parentNode.className == 'title' || $(el).hasClass('title')
  }

  function shouldDoNothing(el){
    if(hasTitle(el) && el.textContent.trim() == ""){
      return true
    }
  }

  // Taskdown FTW!!!

  function Taskdown(editor,projectId) {
    this.editor = editor;
    this.projectId = projectId;
  }

   Taskdown.prototype.trackedKeys = function(keyCode) {
     return { 13: 'enter', 9: 'tab' }[keyCode] || 'normal';
   }

   Taskdown.prototype.normal = function(){
      var el = selection().baseNode;
      if(el.nodeName == 'SECTION'){
        document.execCommand('insertHTML', true, '<div class="task">')
        document.execCommand('insertHTML', true, '<div class="title">')
      }
    };

    Taskdown.prototype.enter = function() {
      var el        = selection().baseNode;
      var $el       = $(el.parentNode);
      var indention = indent(el.textContent);
      var range     = selection().getRangeAt(0);

      range.setEndAfter(el);

      var stringAfterCaret = range.extractContents().textContent;

      if (shouldDoNothing(el)) {
        var caretPosition = selection().baseOffset
        document.execCommand('insertText', true, stringAfterCaret)
        setCaretTo(caretPosition)
        return false;
      }

      if (doubleLineBreak(el)) {
        // if (el.textContent == "") {
        //   document.execCommand('insertText', true, " ")
        // }

        var $task = $el.parent();

        $.ajax({
          url: '/projects/'+this.projectId+'/tasks',
          method: 'POST',
          dataType: 'json',
          data: {
            task: {
              name: $task.find('.title').text(),
              description: $task.find('.description').text()
            }
          },
          success: $.proxy(function(taskResponse) {
            $task.attr('data-id', taskResponse.id)
            $(this).trigger('task', [new App.Task(taskResponse)])
          }, this)
        });

        document.execCommand('insertHTML', true, '<div class=task></div>')
        document.execCommand('insertHTML', true, '<div class=title></div>')
        document.execCommand('insertText', true, stringAfterCaret)
        outdentTask()


        return false;
      };

      if ($el.hasClass('title')){
        var description = getDescription(el)
        if (description){
          var currentText = description.text()
          description.html(indention + stringAfterCaret + "\n" + currentText)
          setCaretTo(1, description.get(0))
        }
        else{
          document.execCommand('insertHTML', true, '<div class=description></div>')
          document.execCommand('insertText', true, indention + stringAfterCaret)
          setCaretTo(1)
        }
      }

      if ($el.hasClass('description')){
        document.execCommand('insertHTML', true, "\n" +indention + stringAfterCaret)
        setCaretTo( indentPosition(el.textContent, stringAfterCaret))
        return false;
      }
    }

    Taskdown.prototype.tab = function() {
      var el = selection().baseNode;
      if(el.nodeName != 'SECTION'){
        document.execCommand('insertText', true, "  ")
      }
    }

    Taskdown.prototype.keyDown = function(keyCode, keyCaughtCallback) {
      var key = this.trackedKeys(keyCode);
      if (key != 'normal')
        keyCaughtCallback && keyCaughtCallback();

      this[key]();
    }


  namespace.Taskdown = Taskdown;

})(App)
