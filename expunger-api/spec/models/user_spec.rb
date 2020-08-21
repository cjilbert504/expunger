require 'rails_helper'

RSpec.describe User, type: :model do
  it "has a username" do 
    user = User.new(username: "murdok")

    expect(user.username).to eq("murdok")
  end
end
