@javascript
Feature: Notes

	Scenario: User views notes for a task
		Given the following user:
			| username | batty |
		And that user has 1 project
		And that project has the following task:
			| name | do this |
		And that task has the following note:
			| body | This note |
		And that note belongs to that user
		When I sign in as that user
		And I visit that project
		And I view the notes for "do this"
		Then I see "This note"
		And I see "batty"

	Scenario: User adds note to a task
		Given 1 user
		And that user has 1 project
		And that project has the following task:
			| name | do this |
		Given I sign in as that user
		And I visit that project
		And I view the notes for "do this"
		When I add a note with "Hello there"
		Then I see "Hello there" in the notes
