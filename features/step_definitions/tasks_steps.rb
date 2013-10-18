When /^I type "(.+)" into the task editor$/ do |task_text|
  page.execute_script("$('.CodeMirror')[0].CodeMirror.setValue('#{task_text}')")
end

Then /^"(.+)" is saved and visible$/ do |task_name|
  tasks_group = find('#tasks')
  within(tasks_group) do
    page.should have_content(task_name)
  end
  sleep(0.1)
  expect(Task.where(name: task_name).first).to be_present
end
