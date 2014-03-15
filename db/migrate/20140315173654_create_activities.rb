class CreateActivities < ActiveRecord::Migration
  def up
    self.execute %Q[
      CREATE VIEW activities
        AS (
          select id, body, task_id, user_id, created_at, updated_at, 'Note' as activity_type from notes
          union
          select id, body, task_id, user_id, created_at, updated_at, 'Event' as activity_type from events
        )
    ]
  end

  def down
    self.execute "DROP VIEW activities;"
  end
end
