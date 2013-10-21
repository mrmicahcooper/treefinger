class AddTaskStringToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :task_string, :text
  end
end
