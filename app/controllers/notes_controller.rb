class NotesController < ApplicationController

  respond_to :json
  expose(:task)
  expose(:notes) { task.notes }

  def index
    render json: notes.to_json(methods: [:body, :username])
  end

end
