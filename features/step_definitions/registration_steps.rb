When 'I fill out the registration form' do
  within '#sign_up' do
    fill_in 'Username', with: 'mrmicahcooper'
    fill_in 'Email',    with: 'email@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
  end
end

And /^there should be (\d+) users?$/ do |count|
  User.count.should == count.to_i
end

And "I see that I am signed in as that user" do
  page.should(have_content "You are signed in as mrmicahcooper")
end
