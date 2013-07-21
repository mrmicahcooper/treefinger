Treefinger::Application.routes.draw do

  root to: 'pages#home'

  get '/sign_out', to: 'sessions#destroy', as: :sign_out

  post '/', to: 'users#create', as: :users
  post '/sign_in', to: 'sessions#create', as: :sign_in

  resources :users, only: :new

  get '/ui/(:action)', controller: 'ui'

  get '/:username', to: 'pages#dashboard', as: :dashboard

end
