require 'rails_helper'

RSpec.describe BlerbsController, :type => :controller do
    describe "GET index" do
        before do
            get :index
        end

        it "has a 200 status code" do
            expect(response.status).to eq(200)
        end

        it "responds with content type of application/json" do
            expect(response.content_type).to eq("application/json; charset=utf-8")
        end
    end
end