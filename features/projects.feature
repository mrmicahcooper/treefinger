Feature: Projects
	Scenario: User views a projects
		Given 1 user
		And that user has the following projects:
			| name     |
			| project1 |
			| project2 |
		And I sign in as that user
		Then I should see "project1"
		And I should see "project2"
