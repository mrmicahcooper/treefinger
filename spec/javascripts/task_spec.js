describe("Task", function(){

	describe("title", function(){
		task = new Task("User signs up");

		it("Returns the first line", function(){
			expect(task.title()).toEqual("User signs up")
		})
	})

	describe("description", function(){
		task = new Task("User signs up\n  And it's neat")

		it("Returns the rest of the task string", function(){

			expect(task.description()).toEqual("\n  And it's neat")
		})
	})

})
