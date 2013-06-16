class UsersController < ApplicationController
  layout 'session', only: :create

  expose(:user) { User.new(user_params) }

  def create
    if user.save
      redirect_to :dashboard
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
