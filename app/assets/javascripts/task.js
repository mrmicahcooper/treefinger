var task = function(taskString){

	this.taskString = taskString;
	this.name = function(){ return this.taskString.match(/^.+/)[0]; };
	this.description = function(){ return this.taskString.replace(this.name(),'') };

	this.save = function(){
		var url = '/projects/'+window.project_id+'/tasks';
		var self = this;

		$.ajax({
			type: "POST",
			url: url,
			data: self.toJSON(),
			success: function(response){ return response; },
			dataType: "JSON"
		})

	}

	this.toJSON = function(){
		return {
			name: this.name(),
			description: this.description(),
			active: true
		}
	}

};
