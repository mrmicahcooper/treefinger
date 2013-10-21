var task = function(taskString){

	this.taskString = taskString;
	this.name = function(){ return this.taskString.match(/^.+/)[0]; };
	this.description = function(){ return this.taskString.replace(this.name(),'') };

	this.save = function(save_callback){

		var url = '/projects/'+window.project_id+'/tasks',
		self = this;

		$.ajax({
			type: "POST",
			url: url,
			data: self.toParams(),
			success: function(response){
				save_callback(response)
			},
			dataType: "JSON"
		})
	}

	this.toParams = function(){
		return {
			task:{
				name: this.name(),
				description: this.description(),
				active: true
			}
		}
	}

};
