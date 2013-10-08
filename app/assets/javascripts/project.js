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

var Task = function(task_string){
	this.taskString = task_string;
	this.title = function(){ return this.taskString.match(/^.+/)[0]; };
	this.description = function(){ return this.taskString.replace(this.title(),'') };
};

$(function(){
	Project.load_code_mirror();
});
