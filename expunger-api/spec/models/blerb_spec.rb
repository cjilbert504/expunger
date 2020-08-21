require 'rails_helper'

RSpec.describe Blerb, type: :model do
  before do 
    @blerb = Blerb.new(content: "What's the worst that could happen?")
  end

  it "has content" do
    expect(@blerb.content).to eq("What's the worst that could happen?")
  end

  it "has content attribute that has data of type String assigned to it" do
    expect(@blerb.content.class).to eq(String)
  end

  it "is associated to a user" do
    @blerb.build_user(username: "murdok2", email: "murdok2@test.com", password: "12345")

    expect(@blerb.user.username).to eq("murdok2")
  end
end
