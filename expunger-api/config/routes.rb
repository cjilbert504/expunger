Rails.application.routes.draw do
  # devise_for :users, controllers: {
  #   registrations: 'users/registrations',
  #   sessions: 'users/sessions'
  # }

  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:create]
  resources :blerbs, only: [:index, :create]
  # get "/blerbs", to: "blerbs#index"
end
