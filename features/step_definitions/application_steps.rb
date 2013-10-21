Given /^I am logged in viewing "(.*)" with the tasks:$/ do |project_name, table|
  @user = Fabricate(:user)
  @project = Fabricate(:project, user: @user)
  table.hashes.each do |task|
    @task = Fabricate(:task, task.merge(project: @project))
  end
  step "I sign in as that user"
  visit project_path(@user.username, @project.name)
end
