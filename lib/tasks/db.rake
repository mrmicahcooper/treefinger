namespace :db do
  desc "Populate the project with new data"

  task :populate => :environment do
    User.delete_all
    Project.delete_all
    Task.delete_all
    Note.delete_all

    user = Fabricate(:user)
    puts "Created user: #{user.username}"

    2.times { Fabricate(:project, user: user) }
    puts "Created tasks"

    Project.all.each_with_index do |p, i|
      Fabricate(:task, name: "task#{i}", project: p )
    end
    puts "Created tasks"

    Task.all.each do |task|
      Fabricate(:note, task: task, user: user)
    end
    puts "Created notes"

  end
end
