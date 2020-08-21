class BlerbsController < ApplicationController 
    def index
        blerbs = Blerb.all
        render json: BlerbSerializer.new(blerbs).serialized_json
    end
end