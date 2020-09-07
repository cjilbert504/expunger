class BlerbsController < ApplicationController 

    def index
        blerbs = Blerb.not_outdated.order(created_at: :desc)

        render json: BlerbSerializer.new(blerbs).serialized_json
    end

    def create
        blerb = Blerb.new(blerb_params)
        if blerb.save
            render json: BlerbSerializer.new(blerb).serialized_json
        else
            response = {
                error: "Form Errors",
                details: blerb.errors.full_messages
            }
            
            render json: response
        end
    end

    private

    def blerb_params
        params.require(:blerb).permit(:content, :user_id)
    end
end