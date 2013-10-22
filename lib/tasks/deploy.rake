namespace :deploy do
  desc 'Deploy to staging'
  task :production do
    Paratrooper::Deploy.new('treefingerapp', tag: 'production').deploy
  end
end
