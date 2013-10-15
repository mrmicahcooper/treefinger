var task = function(taskString){

	this.taskString = taskString;
	this.name = function(){ return this.taskString.match(/^.+/)[0]; };
	this.description = function(){ return this.taskString.replace(this.name(),'') };

	return{
		taskString: taskString,
		name: this.name(),
		description: this.description(),
		active: true
	}

};
