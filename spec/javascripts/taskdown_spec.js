describe("taskdown", function(){
	var task_string1 = "User signs in\n Given I am on the home page\n  And I do this\n  Then this\n\n"
	var task_string2 = "User signs out\n Given  I am signed in\n  And ...\n  Then that"
	var projectString = task_string1 + task_string2

	taskdown = new taskdown(projectString)

	describe("projectString", function(){
		it("returns the passed in string", function(){
			expect(taskdown.projectString).toEqual(projectString)
		})
	})

	describe("task_strings", function(){
		it("returns a collection of task_strings", function(){
			expect(taskdown.task_strings[0]).toEqual(task_string1)
			expect(taskdown.task_strings[1]).toEqual(task_string2)
		})
	})

})
