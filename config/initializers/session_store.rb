if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_petapon_app", domain:"https://petapon.herokuapp.com" 
else
  Rails.application.config.session_store :cookie_store, key: "_petapon_app"
end