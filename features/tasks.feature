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

	@javascript
	Scenario: User views a task in the task editor
		Given I am logged in, viewing "Foshow" with the tasks:
			| name      | description      |
			| something | It's a hard task |
		When I view the "something" task
		Then I see that task in the editor
