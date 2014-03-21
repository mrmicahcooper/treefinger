class Project < ActiveRecord::Base
  belongs_to :user
  has_many :tasks, dependent: :destroy

  has_many :collaborations
  has_many :collaborators, through: :collaborations, source: :user

  validate :name, with: Validations::SLUG
  validates_uniqueness_of :name, scope: :user_id

  before_validation :underscore

  def self.find_by_name(name)
    find_by(name: name)
  end

  private

  def underscore
    self.name = name.parameterize.underscore
  end
end
