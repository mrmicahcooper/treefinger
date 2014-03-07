class NoteRepresenter < Struct.new(:note)
  def as_json(*args)
    {
      body: note.body,
      username: note.username
    }
  end
end
