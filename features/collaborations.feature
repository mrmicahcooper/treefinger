Feature: Collaborations
	Scenario: User views collaborated project
		Given "foo@example.com" has shared "projo" with "bar@example.com"
		And I am signed in as "bar@example.com"
		When I follow "view all projects"
		Then I see "projo" is shared with me
