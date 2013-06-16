When 'I fill out the registration form' do
  within '.sign_up' do
    fill_in 'username', with: 'mrmicahcooper'
    fill_in 'email',    with: 'email@example.com'
    fill_in 'password', with: 'password'
    fill_in 'password confirmation', with: 'password'
  end
end

And /^there should be (\d+) users?$/ do |count|
  User.count.should == count.to_i
end
