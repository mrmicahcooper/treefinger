class User < ActiveRecord::Base

  include Authem::User

  has_many :projects

  has_many :collaborations
  has_many :shared_projects, through: :collaborations, source: :project

  validate :username, with: Validations::SLUG

  def all_projects
    (projects  + shared_projects).sort_by(&:name)
  end
end
