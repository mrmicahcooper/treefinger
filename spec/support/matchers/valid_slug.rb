RSpec::Matchers.define :be_a_valid_slug do
  match do |actual|
    !(actual =~ Validations::SLUG).nil?
  end
end
