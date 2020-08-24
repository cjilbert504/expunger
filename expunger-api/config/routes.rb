Rails.application.routes.draw do
  devise_for :users
  # resources :sessions, only: [:create, :destroy]
  # resources :users, only: [:create]
  get "/blerbs", to: "blerbs#index"
end
