Treefinger::Application.routes.draw do

  root to: 'pages#home'
  get 'ui/(:action)', controller: 'ui'
  get '/dashboard', to: 'pages#dashboard'

  resources :projects, only: :show

end
