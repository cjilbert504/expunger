require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = User.new(username: "murdok", email: "murdok@test.com", password: "12345")
  end
  it "has a username" do 
    expect(@user.username).to eq("murdok")
  end

  it "has an email address" do
    expect(@user.email).to eq("murdok@test.com")
  end

  it "has a password" do
    expect(@user.password).to eq("12345")
  end

  it "has a blerb" do
    @user.blerbs.build(content: "He can speak Russian… in French")

    expect(@user.blerbs.first.content).to eq("He can speak Russian… in French")
  end
end
