class SessionsController < ApplicationController

  expose(:user) {
    User.where('email = :query OR username = :query', query: email_or_username).first
  }

  def create
    if user && user.authenticate(password)
      sign_in(user)
      redirect_to :dashboard
    else
      redirect_to :root
    end
  end

  private

  def email_or_username
    session_params[:email_or_username]
  end

  def password
    session_params[:password]
  end

  def session_params
    params.permit(:password, :email_or_username)
  end

end
