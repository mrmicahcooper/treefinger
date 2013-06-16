Feature: Registration
	Scenario: User signs up
		Given I am on the home page
		When I fill out the registration form
		And I press "Register for free"
		Then I should be on my dashboard page
		And there should be 1 user
