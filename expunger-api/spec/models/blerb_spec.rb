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
end
