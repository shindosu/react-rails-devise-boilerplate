class RegistrationsController < ApplicationController
  def create
    user = User.create!(
      
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
  )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: {status: 500}
    end
  end

  private
  def sign_up_params
    params.permit([:user, :registration, :email, :password, :password_confirmation])
  end
end