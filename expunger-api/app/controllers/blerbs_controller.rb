class BlerbsController < ApplicationController 
    def index
        blerbs = Blerb.all
        render json: blerbs
    end
end