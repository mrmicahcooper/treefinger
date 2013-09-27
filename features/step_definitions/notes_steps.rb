When /^I view the notes for "(.+)"$/ do |task_name|
  within(:xpath, "//section[@id='tasks']//li[contains(.,'#{task_name}')]") do
    click_link "notes"
  end
end

When(/^I add a note with "(.+)"$/) do |note_text|
  fill_in "note_text", with: note_text
  click_button "Add note"
end

Then(/^I see "(.+)" in the notes$/) do |note_text|
  within(".note_container") do
    page.should have_text note_text
  end
end
