class Project < ActiveRecord::Base
  belongs_to :user
  has_many :tasks

  validate :name, with: Validations::SLUG
end
