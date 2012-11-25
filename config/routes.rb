CloudEdit::Application.routes.draw do
  
  root :to => "home#index"
  resources :home
  resources :documents
  
end
