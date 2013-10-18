class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  include Authem::ControllerSupport

  before_filter :require_user

  expose(:current_project) { current_user.projects.last || NilProject.new }

  decent_configuration do
    strategy DecentExposure::StrongParametersStrategy
  end

end
