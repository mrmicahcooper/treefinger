var task = function(task_string){

	this.task_string = task_string;
	this.name = function(){ return this.task_string.match(/^.+/)[0]; };
	this.description = function(){ return this.task_string.replace(this.name(),'') };

	this.save = function(save_callback){
		var url = '/projects/'+window.project_id+'/tasks',
		self = this;

		$.ajax({
			type: "POST",
			url: url,
			data: self.toParams(),
			success: function(response){
				response.active = true
				save_callback(response)
			},
			dataType: "JSON"
		})
	}

	this.toParams = function(){
		return {
			task:{
				task_string: this.task_string,
				name: this.name(),
				description: this.description(),
				active: true
			}
		}
	}

};
