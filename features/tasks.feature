@javascript
Feature: Tasks

	Scenario: User views tasks for a project
		Given 1 user
		And that user has the following project:
			| name | foo |
		And that project has the following tasks:
			| name          |
			| Do this       |
			| Don't do that |
		When I sign in as that user
		And I follow "foo"
		Then I see "Do this"
		And I see "Don't do that"

	Scenario: User adds a task for a project
		Given 1 user
		And that user has the following project:
			| name | hexas |
		When I sign in as that user
		And I follow "hexas"
		And I type "This is a new task" into the task editor
		And I follow "save tasks"
		Then "This is a new task" is saved and visible

	@javascript
	Scenario: User views a task in the task editor
		Given I am logged in viewing "Foshow" with the tasks:
			| name      | description      | task_string                   |
			| something | It's a hard task | something\n  It's a hard task |
		When I view the "something" task
		Then I see that task in the editor
