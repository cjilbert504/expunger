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

    describe "POST create" do
        before do
            post :create, :params => { :blerb => { content: "A sample blerb", user_id: 1 }}
        end

        it "has a 200 status code" do
            expect(response.status).to eq(200)
        end

        it "responds with content type of application/json" do
            expect(response.content_type).to eq("application/json; charset=utf-8")
        end
    end

    describe "blerb_params" do
        it "only allows the permitted attributes" do
            expect(post :create, :params => { :blerb => { content: "A sample blerb", user_id: 1, some_other_thing: "something else" }}).to_not eq(true)
        end
    end

end