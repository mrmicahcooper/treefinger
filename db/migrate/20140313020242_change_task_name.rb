class ChangeTaskName < ActiveRecord::Migration
  def change
    change_column :tasks, :name, :text
    remove_column :tasks, :task_string, :text
  end
end
