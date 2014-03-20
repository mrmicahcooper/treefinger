When "I visit that project" do
  visit show_project_path(@user.username, @project.name)
end

Then "I should see that project name in the header" do
  within 'header' do
    page.should have_content(@project.name)
  end
end

Then /^I should see "(.*?)" in the url$/ do |url_text|
  expect(current_url).to match(url_text)
end
