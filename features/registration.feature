Feature: Registration
	Scenario: User signs up
		Given I am on the home page
		When I fill the following:
			| username              | mrmicahcooper     |
			| email                 | email@example.com |
			| password              | password          |
			| password confirmation | password          |
		And I press "register for free"
		Then I should be on my dashboard page
		And I should see "Thank you for signing up!"
