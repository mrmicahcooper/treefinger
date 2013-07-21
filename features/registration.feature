Feature: Registration
	Scenario: User signs up
		Given I am on the home page
		When I fill out the registration form
		And I press "Register for free"
		Then I should be on my dashboard page
		And I see that I am signed in as that user
