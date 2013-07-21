class Projects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string     :name
      t.references :user
    end
  end
end
