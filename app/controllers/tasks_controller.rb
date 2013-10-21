class TasksController < ApplicationController

  expose(:project) { current_user.projects.find(params[:project_id]) }
  expose(:tasks) { project.tasks }
  expose(:task, attributes: :task_params)

  def index
    render json: tasks
  end

  def create
    render json: task if task.save
  end

  private

  def task_params
    params.require(:task).permit(
      :name,
      :description,
      :task_string
    )
  end


end
