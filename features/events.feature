Feature: Events
	@javascript
	Scenario: User starts tasks
		Given I am logged in, viewing "Foshow" with the tasks:
			| name      | description      |
			| something | hard task |
		When I "start" the "something" task
		Then the "something" task is "started"

		When I view the notes for "something"
		Then I see "started" in the notes
