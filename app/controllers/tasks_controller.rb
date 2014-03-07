class TasksController < ApplicationController

  expose(:project) { current_user.projects.find(params[:project_id]) }
  expose(:tasks) { project.tasks }
  expose(:task, attributes: :task_params)

  def index
    render json: TaskRepresenter.wrap(tasks)
  end

  def create
    render json: TaskRepresenter.new(task) if task.save
  end
  alias update create

  private

  def task_params
    params.require(:task).permit(
      :name,
      :description,
      :task_string
    )
  end


end
