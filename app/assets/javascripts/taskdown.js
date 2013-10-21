var taskdown = function(projectString){

	this.projectString = projectString
	this.task_strings = function(){ return projectString.split(/^(?=\w)/m)}

	return{
		projectString: projectString,
		task_strings: this.task_strings()
	}
};
