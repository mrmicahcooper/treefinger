Then "I should see that project name" do
  within 'header' do
    page.should have_content(@project.name)
  end
end
