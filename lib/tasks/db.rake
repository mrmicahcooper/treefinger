require 'fabrication'
namespace :db do
  desc "Populate the project with new data"

  task :populate => :environment do
    User.delete_all
    Project.delete_all
    Task.delete_all

    user = Fabricate(:user)

    2.times { Fabricate(:project, user: user) }

    Project.all.each_with_index do |p, i|
      Fabricate(:task, name: "task#{i}", project: p )
    end

  end
end
