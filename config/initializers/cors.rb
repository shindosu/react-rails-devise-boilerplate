Rails.application.config.middleware.insert_before 0, Rack::Cors do 

 # Development 

 allow do 
  origins 'http://localhost:8080'
  resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
 end 

 # Production 
 
 allow do 
  origins 'https://petapon.herokuapp.com'
  resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
 end 
 
end 