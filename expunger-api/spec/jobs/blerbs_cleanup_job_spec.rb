require 'rails_helper'

RSpec.describe BlerbsCleanupJob, type: :job do
  describe "#perform_later" do 
    it "destroys a blerb record whose created_at attribute is greater than 10 seconds from the current time" do 
      blerb = Blerb.create(content: "This is a test blerb!!")

      ActiveJob::Base.queue_adapter = :test
      BlerbsCleanupJob.perform_later

      expect(BlerbsCleanupJob).to have_been_enqueued
    end
  end
end
