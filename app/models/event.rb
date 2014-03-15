class Event < ActiveRecord::Base
  belongs_to :task
  belongs_to :user

  validates :body, presence: true

  delegate :username, to: :user
end
