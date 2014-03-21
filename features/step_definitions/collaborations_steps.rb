Given /^"(.+)" has shared "(.+)" with "(.+)"$/ do |user_email, project_name, collaborator_email|
  user = find_or_create(:user, email: user_email)
  collaborator = find_or_create(:user, email: collaborator_email)
  project = find_or_create(:project, name: project_name)
  user.projects << project
  project.collaborators << collaborator
end

Then /^I see "(.+)" is shared with me$/ do |project_name|
  within ".projects" do
    expect(page).to have_content(project_name)
  end
end
