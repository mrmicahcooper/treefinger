class NotesController < ApplicationController

  expose(:task)
  expose(:activities) { task.activities }
  expose(:notes) { task.notes }
  expose(:new_note) do
    notes.build(note_params) do |note|
      note.user = current_user
    end
  end

  def index
    render json: NoteRepresenter.wrap(activities)
  end

  def create
    respond_to do |format|
      if new_note.save
        format.json { render json: NoteRepresenter.new(new_note), status: :created }
      else
        format.json { render json: new_note.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def note_params
    params.require(:note).permit(:body)
  end

end
