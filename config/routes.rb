Rails.application.routes.draw do
  
  resources :items
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/session", to: "sessions#index"
  post "/login", to: "sessions#create"
  get "/me", to: "users#me"
  delete "/logout", to: "sessions#destroy"
end
