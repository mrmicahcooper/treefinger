class UsersController < ApplicationController
  skip_before_filter :require_user, only: :create
  layout 'session', only: :create

  expose(:user) { User.new(user_params) }

  def create
    if user.save
      sign_in(user)
      redirect_to dashboard_path(current_user.username)
    else
      render 'pages/home'
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :password_confirmation)
  end

end
