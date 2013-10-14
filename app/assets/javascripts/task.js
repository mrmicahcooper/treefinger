var task = function(taskString){

	this.taskString = taskString;
	this.title = function(){ return this.taskString.match(/^.+/)[0]; };
	this.description = function(){ return this.taskString.replace(this.title(),'') };

	return{
		taskString: taskString,
		title: this.title(),
		description: this.description()
	}

};
