class SessionsController < ApplicationController
    def create
        user = User.where(email: params[:user][:email]).first

        if user&.valid_password?(params[:user][:password])
            render json: UserSerializer.new(user).serialized_json
        else
            head(:unauthorized)
        end
    end

    def destroy

    end
end