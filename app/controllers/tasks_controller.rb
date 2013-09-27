class TasksController < ApplicationController

  expose(:project) { current_user.projects.find(params[:project_id]) }
  expose(:tasks) { project.tasks }

  def index
    render json: tasks
  end

end
