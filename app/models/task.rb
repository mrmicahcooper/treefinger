class Task < ActiveRecord::Base
  Actions = {
    'started'   => 'finish',
    'finished'  => 'restart',
    'restarted' => 'finish'
  }

  belongs_to :project
  has_many :notes

  default_scope ->(){order(created_at: :desc)}

  def action
    Actions[status]
  end

end
