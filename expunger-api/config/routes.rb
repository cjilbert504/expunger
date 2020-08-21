Rails.application.routes.draw do
  devise_for :users
  get "/blerbs", to: "blerbs#index"
end
