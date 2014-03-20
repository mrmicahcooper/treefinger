Treefinger::Application.routes.draw do
  root to: 'pages#home'

  post '/', to: 'users#create', as: :users
  get '/ui/(:action)', controller: 'ui'

  resources :users, only: :new


  get '/sign_out', to: 'sessions#destroy', as: :sign_out
  post '/sign_in', to: 'sessions#create', as: :sign_in


  get '/new', to: 'projects#new', as: :new_project


  resources :tasks, only: [] do
    resources :notes, only: [:index, :create]
  end

  resources :projects, only: [:create, :update] do
    resources :tasks, only: [:index, :update]
    resource  :tasks, only: :create
  end

  get '/:username', to: 'pages#dashboard', as: :dashboard
  patch '/:username/:project_name', to: 'projects#update', as: :update_project

  get '/:username/:project_name', to: 'projects#show', as: :show_project
  get '/:username/:project_name/edit', to: 'projects#edit', as: :edit_project

end
