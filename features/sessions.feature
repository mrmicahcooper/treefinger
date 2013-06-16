Feature: Sessions

	Scenario: User signs in
		Given the following users:
			| email             | username |
			| email@example.com | dudebro  |
		And I am on the home page
		When I sign in with "email@example.com" and "password"
		Then I should be on my dashboard page
