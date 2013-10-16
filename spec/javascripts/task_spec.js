describe("task", function(){

	var description = "\n Given I am on the home page\n  And I do this\n  Then this"
	var name =  "User signs in"

	var taskString = name + description

	task = new task(taskString)

	describe("taskString", function(){
		it("is the string passed in", function(){
			expect(task.taskString).toEqual(taskString)
		})
	})

	describe("name", function(){
		it("is the first line of the taskString", function(){
			expect(task.name()).toEqual(name)
		})
	})

	describe("description", function(){
		it("is the whole string except the name", function(){
			expect(task.description()).toEqual(description)
		})
	})

	describe("toJSON", function(){
		it("returns a json object of the attributes", function(){
			expect(task.toJSON()).toEqual({
				name:  name,
				description: description,
				active: true
			})
		})
	})

})
