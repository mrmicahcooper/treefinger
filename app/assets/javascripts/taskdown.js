var taskdown = function(projectString){

	this.projectString = projectString
	this.taskStrings = function(){ return projectString.split(/^(?=\w)/m)}

	return{
		projectString: projectString,
		taskStrings: this.taskStrings()
	}
};
