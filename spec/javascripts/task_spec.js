describe("task", function(){

	var taskString = "User signs in\n Given I am on the home page\n  And I do this\n  Then this"

	task = new task(taskString)

	describe("taskString", function(){
		it("is the string passed in", function(){
			expect(task.taskString).toEqual(taskString)
		})
	})

	describe("title", function(){
		it("is the first line of the taskString", function(){
			expect(task.title).toEqual("User signs in")
		})
	})

	describe("title", function(){
		it("is the whole string except the title", function(){
			expect(task.description).toEqual("\n Given I am on the home page\n  And I do this\n  Then this")
		})
	})


})
