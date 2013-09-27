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
//= require sugar
//= require_tree .

window.App = angular.module("app", ["ngResource"]);

	App.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr("content");
		$httpProvider.defaults.headers.common['Accept'] = "application/json";
	}]);

App.controller("Project", function($scope, $http) {

	$scope.notes = [];

	$http.get('/projects/'+project_id+'/tasks').success(function(tasks){
		$scope.tasks = tasks
	});

	$scope.showNotes = function(task){
		var promise;
		$scope.tasks.forEach(function(task) { task.noted = false; });
		task.noted = true
		promise = $http.get('/tasks/'+task.id+'/notes');
		promise.success(function(notes) {
			$scope.notes = notes;
		});
	};

	$scope.addNote = function() {
		var currentTask = $scope.tasks.find(function(task) {
			return task.noted == true
		});

		$http.post(
			'/tasks/'+currentTask.id+'/notes', {
				note: { body: $scope.noteText}
			}
		).success(function(){
			$scope.notes.push({
				body: $scope.noteText,
				username: current_username
			});
			$scope.noteText = ""
		});
	};

});
