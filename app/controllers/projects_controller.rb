class ProjectsController < ApplicationController

  expose(:projects) { current_user.projects }
  expose(:project)  { projects.where(name: project_name).first }
  expose(:tasks)    { project.tasks.to_json }

  private

  def project_name
    params[:project_name]
  end

end
