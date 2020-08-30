class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def current_user
        User.find_by(authentication_token: params[:id])
    end

    def logged_in?
        !!current_user
    end

    def issue_token(payload)
        JWT.encode(payload, "s3cr3t", "HS256")
    end

    def authenticate_user
        jwt = cookies.signed[:jwt]
        JWT.decode(jwt, "s3cr3t", "HS256")
    end

end
