class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :body

      t.references :user
      t.references :task

      t.timestamps
    end
  end
end
