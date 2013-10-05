When /^I type "(.+)" into the task editor$/ do |task_text|
  page.execute_script("$('.CodeMirror')[0].CodeMirror.setValue('#{task_text}')")
end

Then /^I see "(.+)" in the task list$/ do |content|
  within('#tasks') do
    page.should have_content(content)
  end
end

