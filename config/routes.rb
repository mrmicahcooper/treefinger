Treefinger::Application.routes.draw do
  root to: 'pages#home'

  post '/', to: 'users#create', as: :users
  get '/ui/(:action)', controller: 'ui'

  resources :users, only: :new


  get '/sign_out', to: 'sessions#destroy', as: :sign_out
  post '/sign_in', to: 'sessions#create', as: :sign_in

  get '/:username', to: 'pages#dashboard', as: :dashboard
  get '/:username/:project_name', to: 'projects#show', as: :project

  resources :tasks, only: [] do
    resources :notes, only: [:index, :create]
  end

  resources :projects, only: [] do
    resources :tasks, only: :index
    resource  :tasks, only: :create
  end

end
