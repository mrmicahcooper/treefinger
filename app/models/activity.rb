class Activity < ActiveRecord::Base
  belongs_to :task
  belongs_to :user

  validates :body, presence: true

  delegate :username, to: :user

  default_scope ->(){order(created_at: :asc)}
end
