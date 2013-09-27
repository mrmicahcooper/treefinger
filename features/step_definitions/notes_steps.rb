When /^I view the notes for "(.+)"$/ do |task_name|
  within(:xpath, "//section[@id='tasks']//li[contains(.,'#{task_name}')]") do
    click_link "notes"
  end
end
