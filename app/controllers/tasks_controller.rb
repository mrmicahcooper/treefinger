class TasksController < ApplicationController

  expose(:project) { current_user.projects.find(params[:project_id]) }
  expose(:tasks) { project.tasks }
  expose(:task, attributes: :task_params)

  def index
    render json: TaskRepresenter.wrap(tasks)
  end

  def create
    task.events.build(body: event_body, user: current_user) if event_body.present?
    render json: TaskRepresenter.new(task) if task.save
  end
  alias update create

  private

  def task_params
    params.require(:task).permit(
      :name,
      :description,
      :task_string,
      :status
    )
  end

  def event_body
    params[:task][:status]
  end


end
