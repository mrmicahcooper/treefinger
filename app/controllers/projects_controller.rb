class ProjectsController < ApplicationController

  expose(:projects) { current_user.projects }
  expose(:tasks) { project.tasks.to_json }

  expose(:project,
         finder: :find_by_name,
         finder_parameter: :project_name,
         attributes: :project_params,
         parent: :current_user)

  def create
    if project.save
      redirect_to dashboard_path(current_user.username)
    else
      render :new
    end
  end

  private

  def project_name
    params[:project_name]
  end

  def project_params
    params.require(:project).permit(:name)
  end

end
