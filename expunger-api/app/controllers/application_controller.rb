class ApplicationController < ActionController::API
    def current_user
        User.find_by(authentication_token: params[:id])
    end

    def logged_in?
        !!current_user
    end

end
