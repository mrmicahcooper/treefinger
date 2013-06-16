function tasks($scope, $http) {

	$http.get('/projects/1').success(function(data){
		$scope.tasks = data;
	});

	$scope.toggle_task = function($index){
		var task = $scope.tasks[$index];
		task.active ? task.active = false : task.active = true
	};

}
