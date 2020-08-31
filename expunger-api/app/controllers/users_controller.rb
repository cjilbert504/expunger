class UsersController < ApplicationController
    before_action :authenticate_user, only: [:show]

    def show
        user = current_user
        render json: UserSerializer.new(user).serialized_json
    end

    def create
        user = User.new(user_params)

        if user.save
            created_jwt = issue_token({id: user.id})
            cookies.signed[:jwt] = {value:  created_jwt, httponly: true, expires: 1.hour.from_now}
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