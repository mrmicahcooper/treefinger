class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :body, nil: false

      t.references :user, nil: false
      t.references :task, nil: false
      t.timestamps

    end
  end
end
