window.App = angular.module("app", ["ngResource"]);

App.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr("content");
	$httpProvider.defaults.headers.common['Accept'] = "application/json";
}]);

App.controller("Project", function($scope, $http) {

	$scope.notes = [];
	$scope.noteAreVisible = false;
	$scope.taskText = "";

	$http.get('/projects/'+project_id+'/tasks').success(function(tasks){
		$scope.tasks = tasks
	});

	$scope.showNotes = function(task){
		var promise;
		$scope.noteAreVisible = true;
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
				body: $scope.noteText, username: current_username
			});
			$scope.noteText = "";
		});
	};

	$scope.saveTasks = function() {
		tasks = Project.parse_task_text();
	};

});