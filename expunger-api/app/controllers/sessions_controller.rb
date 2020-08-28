class SessionsController < ApplicationController
    def create
        user = User.where(email: params[:user][:email]).first

        if user&.valid_password?(params[:user][:password])
            render json: UserSerializer.new(user).serialized_json
        else
            response = {
                error: "Invalid Credentials",
                details: user.errors.full_messages
            }
            
            render json: response, status: :unauthorized
        end
    end

    def destroy

    end
end