class ProjectsController < ApplicationController
  expose(:project) { Project }

  def show
    render json: project[:tasks]
  end
end


