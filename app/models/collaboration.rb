class Collaboration < ActiveRecord::Base
  belongs_to :project
  belongs_to :user

  validate :project, :user, presence: true
end
