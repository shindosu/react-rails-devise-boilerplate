class PagesController < ApplicationController
 def home
  render json: {status: "I'm here"} 
 end
end