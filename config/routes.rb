Treefinger::Application.routes.draw do
  root to: 'pages#home'

  post '/', to: 'users#create', as: :users
  get '/ui/(:action)', controller: 'ui'

  resources :users, only: :new


  get '/sign_out', to: 'sessions#destroy', as: :sign_out
  post '/sign_in', to: 'sessions#create', as: :sign_in

  get '/:username', to: 'pages#dashboard', as: :dashboard

  get '/:username/new_project', to: 'projects#new', as: :new_user_project


  resources :tasks, only: [] do
    resources :notes, only: [:index, :create]
  end

  resources :projects, only: [] do
    resources :tasks, only: [:index, :update]
    resource  :tasks, only: :create
  end

  post '/:username/projects', to: 'projects#create', as: :projects
  get '/:username/:project_name', to: 'projects#show', as: :project

end
