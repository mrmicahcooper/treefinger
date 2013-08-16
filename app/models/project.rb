class Project < ActiveRecord::Base
  belongs_to :user

  validate :name, with: Validations::SLUG
end
