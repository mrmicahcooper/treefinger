describe("taskdown", function(){
	var taskString1 = "User signs in\n Given I am on the home page\n  And I do this\n  Then this\n\n"
	var taskString2 = "User signs out\n Given  I am signed in\n  And ...\n  Then that"
	var projectString = taskString1 + taskString2

	taskdown = new taskdown(projectString)

	describe("projectString", function(){
		it("returns the passed in string", function(){
			expect(taskdown.projectString).toEqual(projectString)
		})
	})

	describe("taskStrings", function(){
		it("returns a collection of taskStrings", function(){
			expect(taskdown.taskStrings[0]).toEqual(taskString1)
			expect(taskdown.taskStrings[1]).toEqual(taskString2)
		})
	})

})
