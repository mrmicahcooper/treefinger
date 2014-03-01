class Task < ActiveRecord::Base
  belongs_to :project
  has_many :notes

  default_scope ->(){order(created_at: :desc)}
end
