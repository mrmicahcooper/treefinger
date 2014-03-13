When /^I sign in with "(.+)" and "(.+)"$/ do |email, password|
  within '.sign_in' do
    fill_in 'email_or_username', with: email
    fill_in 'password', with: password
    click_button 'Sign in'
  end
end

When "I sign in as that user" do
  @user ||= Fabricate(:user)
  visit root_path
  within '.sign_in' do
    fill_in 'email_or_username', with: @user.email
    fill_in 'password', with: @user.password
    click_button 'Sign in'
  end
end

Given "I am signed in" do
  @user ||= Fabricate(:user)
  visit root_path
  within '.sign_in' do
    fill_in 'email_or_username', with: @user.email
    fill_in 'password', with: @user.password
    click_button 'Sign in'
  end
end
