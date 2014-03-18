When /^I view the notes for "(.+)"$/ do |task_name|
  within(:xpath, "//section[@id='tasks']//li[contains(.,'#{task_name}')]") do
    expect(page).to have_content(task_name)
    expect(page).to have_css('.notes')
    all(:xpath, "//li[contains(.,'#{task_name}')]//a[@class='notes']").first.click
  end
end

When(/^I add a note with "(.+)"$/) do |note_text|
  fill_in "note_text", with: note_text
  click_button "Add note"
end

Then(/^I see "(.+)" in the notes$/) do |note_text|
  synchronize do
    within("#notes") do
      expect(page).to have_css(".notes")
      expect(page).to have_content note_text
    end
  end
end
