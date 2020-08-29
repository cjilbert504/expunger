Rails.application.routes.draw do
  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:create, :show]
  resources :blerbs, only: [:index, :create]
end
