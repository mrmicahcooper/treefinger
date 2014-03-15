class NoteRepresenter < Struct.new(:note)
  def self.wrap(notes)
    notes.map { |note| new(note) }
  end

  def as_json(*args)
    {
      body: note.body,
      username: note.username
    }
  end
end
