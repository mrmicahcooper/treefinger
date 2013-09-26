Given "I am on the home page" do
  visit root_path
end

When /^I press "(.*)"$/ do |button|
  click_button button
end

When /^I go to the (.+) page$/ do |path|
  visit send("#{path}_path".to_sym)
end

When /^I go to that user's page$/ do
  visit dashboard_path(@user.username)
end

When /^I follow "(.+)"$/ do |link|
  click_link link
end

Then /^I (:?should) see "(.+)"$/ do |content|
  page.should have_content(content)
end

Then /^I should be on (?:my|the) (\w+) page$/ do |path|
  page.current_path.should == send("#{path}_path".to_sym)
end

Then "I should see my username in the url" do
  page.current_path.should match /#{User.last.username}/
end

