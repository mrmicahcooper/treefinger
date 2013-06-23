Treefinger::Application.routes.draw do

  root to: 'ui#home'
  get '/ui/(:action)', controller: 'ui'
  get '/dashboard', to: 'pages#dashboard'
  post '/', to: 'users#create', as: :users

  post '/sign_in', to: 'sessions#create'
  get '/sign_out', to: 'sessions#destroy', as: :sign_out

  resources :users, only: :new

end
