Feature: Projects
	Scenario: User views a project
		Given 1 user
		And that user has 1 project
		And I sign in as that user
		Then I should see that project name
