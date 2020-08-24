class UsersController < ApplicationController
    def create
        binding.pry
        @user = User.new(user_params)
        binding.pry
        @user.save
        binding.pry
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end