class Project < ActiveRecord::Base
  belongs_to :user
  has_many :tasks, dependent: :destroy

  validate :name, with: Validations::SLUG
  validates_uniqueness_of :name, scope: :user_id

  def self.find_by_name(name)
    find_by(name: name)
  end
end
