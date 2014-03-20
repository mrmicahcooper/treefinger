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

	Scenario: User views and edits project
		Given 1 user
		And that user has the following projects:
			| name     |
			| project1 |
		And I sign in as that user
		And I follow "project1"
		Then I should see "project1" in the url
		And I should see that project name in the header
		
		When I follow "Edit"
		And I fill in "Name" with "Other project"
		And I press "Update Project"
		Then I see "other_project"

	Scenario: User adds project
		Given I am signed in
		When I follow "add project"
		And I fill in "Name" with "Treefinger"
		And I press "Create Project"
		Then I see "treefinger"
