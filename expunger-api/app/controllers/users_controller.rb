class UsersController < ApplicationController
    def create
        user = User.new(user_params)

        if user.save
            render json: UserSerializer.new(user).serialized_json
        else
            head(:unprocessable_entity)
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end