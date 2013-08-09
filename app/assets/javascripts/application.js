// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require 'codemirror-3.12/lib/codemirror'
//= require 'codemirror-3.12/keymap/vim'

var dashboard = {

		$scope.toggle_task = function($index){
			var task = $scope.tasks[$index];
			task.active ? task.active = false : task.active = true
			dashboard.update_task_editor($scope.tasks);
		}

		$scope.view_note = function($index){
		}
	},

	load_code_mirror: function(){
		dashboard.editor = CodeMirror(document.getElementById('editor'),
			{
				lineNumbers: true,
				keyMap: 'vim',
				indentWithTabs: true,
				lineWrapping: true,
				height: '900px',
				tabSize: 2,
			});
	}
}

$(function(){

	dashboard.load_code_mirror();
	$('#tasks .view a').click(function(e){
		e.stopPropagation()
	})

})
