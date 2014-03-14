class TaskRepresenter < Struct.new(:task)
  def self.wrap(tasks)
    tasks.map { |task| new(task) }
  end

  def as_json(*args)
    {
      id: task.id,
      name: task.name,
      description: task.description,
      action: task.action
    }
  end
end
