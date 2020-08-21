require 'rails_helper'

RSpec.describe BlerbsController, :type => :controller do
    describe "GET index" do
        it "has a 200 status code" do
            get :index

            expect(response.status).to eq(200)
        end

        it "responds with content type of application/json" do
            expect(response.content_type).to eq("application/json")
        end
    end
end