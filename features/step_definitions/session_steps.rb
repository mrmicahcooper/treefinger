When /^I sign in with "(.+)" and "(.+)"$/ do |email, password|
  within '.sign_in' do
    fill_in 'email_or_username', with: email
    fill_in 'password', with: password
    click_button 'Sign in'
  end
end
