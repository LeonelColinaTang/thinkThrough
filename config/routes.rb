Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
     resources :users, only: [:create]
     resources :posts, only: [:new, :index, :create, :show, :update, :destroy]
     resources :comments, only: [:new, :index, :create, :show, :update, :destroy]
     resource :session, only: [:create, :destroy, :show]
    end


  # end
  root to: 'static_pages#root'
end
