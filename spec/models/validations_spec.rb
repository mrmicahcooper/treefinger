require 'light_spec_helper'
require 'validations'

describe Validations do
  describe "SLUG" do

    it "matches on words and dashes" do
      test_string = "some_valid-slug"
      expect(test_string).to be_a_valid_slug
    end

    it "does not match anything else" do
      test_string = "some invalid slug"
      expect(test_string).to_not be_a_valid_slug
    end
  end

end
