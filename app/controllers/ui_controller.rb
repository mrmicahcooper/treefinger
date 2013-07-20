class UiController < ApplicationController
  skip_before_filter :require_user
  layout :choose_layout

  private

  def choose_layout
    case action_name
    when 'home'
      "ui_session"
    when 'dashboard'
      "application"
    end
  end

end
