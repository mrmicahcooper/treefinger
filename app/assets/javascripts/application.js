//= require jquery
//= require jquery_ujs
//= require sugar
//= require_tree .
//= require codemirror
//= require codemirror/keymaps/vim
//= require project
//= require task
//= require taskdown
//= require treefinger

var dashboard = {
	loadCodeMirror: function(){
		dashboard.editor = CodeMirror(document.getElementById('editor_textarea'), {
			lineNumbers: true,
			keyMap: 'vim',
			indentWithTabs: true,
			lineWrapping: true,
			tabSize: 2,
		});
	},

	taskText: function(){
		text = this.editor.getValue()
		return text || false
	}
}

$(function(){
	dashboard.loadCodeMirror();
})
