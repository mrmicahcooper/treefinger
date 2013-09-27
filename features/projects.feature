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

	Scenario: User views project
		Given 1 user
		And that user has the following projects:
			| name     |
			| project1 |
		And I sign in as that user
		And I follow "project1"
		Then I should see "project1" in the url
		And I should see that project name in the header

	@javascript
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
