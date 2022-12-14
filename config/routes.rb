Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  root "pages#index"

  get "*path", to: "pages#index", via: :all
end
