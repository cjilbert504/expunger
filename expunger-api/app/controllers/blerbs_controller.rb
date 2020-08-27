class BlerbsController < ApplicationController 
    def index
        blerbs = Blerb.not_outdated

        render json: BlerbSerializer.new(blerbs).serialized_json
    end

    def create
        blerb = Blerb.new(blerb_params)
        blerb.save
        render json: BlerbSerializer.new(blerb).serialized_json
    end

    private

    def blerb_params
        params.require(:blerb).permit(:content, :user_id)
    end
end