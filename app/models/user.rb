class User < ActiveRecord::Base
  include Authem::User
  has_many :projects

  validate :username, with: Validations::SLUG
end
