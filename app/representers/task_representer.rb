class TaskRepresenter < Struct.new(:task)
  def self.wrap(tasks)
    tasks.map do |task|
      new(task)
    end
  end

  def as_json(*args)
    {
      id: task.id,
      name: task.name,
      description: task.description
    }
  end
end
