Fabricator :user do
  email { sequence(:email) { |i| "email#{i}@example.com" }}
  username 'user'
  password 'password'
  password_confirmation 'password'
end
