describe("task", function(){

	var description = "\n Given I am on the home page\n  And I do this\n  Then this"
	var name =  "User signs in"

	var task_string = name + description

	task = new task(task_string)

	describe("task_string", function(){
		it("is the string passed in", function(){
			expect(task.task_string).toEqual(task_string)
		})
	})

	describe("name", function(){
		it("is the first line of the task_string", function(){
			expect(task.name()).toEqual(name)
		})
	})

	describe("description", function(){
		it("is the whole string except the name", function(){
			expect(task.description()).toEqual(description)
		})
	})

})
