Given "I am on the home page" do
  visit root_path
end

When /^I press "(.*)"$/ do |button|
  click_button button
end

Then /^I should see "(.*)"$/ do |content|
  page.should have_content(content)
end

Then /^I should be on my (\w+) page$/ do |path|
  page.current_path.should == send("#{path}_path".to_sym)
end
