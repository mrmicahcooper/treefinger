class Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false

      t.string :remember_token
      t.string :reset_password_token
      t.string :session_token
    end
  end
end
