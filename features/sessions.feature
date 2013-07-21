Feature: Sessions

	Scenario: User signs in and out
		Given the following users:
			| email             | username |
			| email@example.com | dudebro  |
		And I am on the home page
		When I sign in with "email@example.com" and "password"
		Then I should see my username in the url

		When I follow "sign out"
		Then I should be on the root page

		When I go to that user's page
		Then I should be on the root page
