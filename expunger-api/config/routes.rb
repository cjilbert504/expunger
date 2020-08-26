Rails.application.routes.draw do
  # devise_for :users, controllers: {
  #   registrations: 'users/registrations',
  #   sessions: 'users/sessions'
  # }

  resources :sessions, only: [:create, :destroy]
  get "/blerbs", to: "blerbs#index"
end
