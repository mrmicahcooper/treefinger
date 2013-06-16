Treefinger::Application.routes.draw do

  root to: 'pages#home'
  get 'ui/(:action)', controller: 'ui'
  get '/dashboard', to: 'pages#dashboard'
  post '/', to: 'users#create', as: :users
  post '/sign_in', to: 'sessions#create'

  resources :users, only: :new

end
