class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name, nil: false

      t.references :project, nil: false
      t.timestamps
    end
  end
end
