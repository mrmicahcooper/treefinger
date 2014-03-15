class Task < ActiveRecord::Base

  attr_accessor :user

  Actions = {
    nil         => 'start',
    'started'   => 'finish',
    'finished'  => 'restart',
    'restarted' => 'finish'
  }

  belongs_to :project
  has_many :notes, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :activities

  default_scope ->(){order(created_at: :desc)}

  def action
    Actions[status]
  end

end
