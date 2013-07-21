Treefinger::Application.routes.draw do

  root to: 'pages#home'

  get '/ui/(:action)', controller: 'ui'
  get '/dashboard', to: 'pages#dashboard'
  post '/', to: 'users#create', as: :users

  post '/sign_in', to: 'sessions#create', as: :sign_in
  get '/sign_out', to: 'sessions#destroy', as: :sign_out

  resources :users, only: :new

end
