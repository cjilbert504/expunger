class SessionsController < ApplicationController

    def create
        user = User.where(email: params[:user][:email]).first
        if user&.valid_password?(params[:user][:password])
            created_jwt = issue_token({id: user.id})
            cookies.signed[:jwt] = {value:  created_jwt, httponly: true, expires: 1.hour.from_now}
            render json: UserSerializer.new(user).serialized_json
        else
          render json: {
            error: 'Username or password incorrect'
          }, status: 404
        end
      end
    
end