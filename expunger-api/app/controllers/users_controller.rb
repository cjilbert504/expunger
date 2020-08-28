class UsersController < ApplicationController

    def show
        user = current_user
        render json: UserSerializer.new(user).serialized_json
    end

    def create
        user = User.new(user_params)

        if user.save
            render json: UserSerializer.new(user).serialized_json
        else
            response = {
                error: "Form Errors",
                details: user.errors.full_messages
            }
            
            render json: response
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end