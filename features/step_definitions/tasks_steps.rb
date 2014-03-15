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

Then "I see that task in the editor" do
  within("#editor") do
    expect(page).to have_content(@task.name)
    expect(page).to have_content(@task.description)
  end
end

When /^I view the "(.+)" task$/ do |task_name|
  within("#tasks") do
    expect(page).to have_content(task_name)
    all(:xpath, "//li/a[contains(.,'#{task_name}')]").first.click
  end
end

When /^I "(.+)" the "(.+)" task$/ do |link_name, task_name|
  path =  "//li[contains(.,'#{task_name}')]"
  expect(page).to have_xpath(path)
  within(:xpath, path) do
    click_link link_name
  end
end

Then /^the "(.+)" task is "(.+)"$/ do |task_name, task_status|
  task = Task.find_by(name: task_name)
  path =  "//li[contains(.,'#{task_name}')]"
  within(:xpath, path) do
    expect(page).to have_content(task.reload.action)
  end
end
