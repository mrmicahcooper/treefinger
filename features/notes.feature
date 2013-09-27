@javascript
Feature: Notes
	Scenario: User views notes for a task
		Given 1 user
		And that user has 1 project
		And that project has the following task:
		 | name | do this |
	 And that task has the following note:
		 | body | This note |
		When I sign in as that user
		And I visit that project
		And I view the notes for "do this"
		Then I see "This note"
