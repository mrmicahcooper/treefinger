var Project = {

	load_code_mirror: function(){
		Project.editor = CodeMirror(document.getElementById('editor_textarea'), {
			lineNumbers: true,
			keyMap: 'vim',
			indentWithTabs: true,
			lineWrapping: true,
			tabSize: 2,
		});
	},

	parse_task_text: function(){
		taskText = this.editor.getValue();
		taskStrings = taskText.split(/(?=\n\w)/)

		Project.tasks = taskStrings.map(function(taskString){
			console.log(new Task(taskString));

		})
	}

};

var Task = function(string){
	this.taskString = string;

	this.title = function(){
		return this.taskString.match(/^.+/);
	}
};

$(function(){
	Project.load_code_mirror();
});
