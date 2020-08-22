class BlerbsCleanupJob < ApplicationJob
  queue_as :default

  def perform#(blerb_id)
    # Blerb.find(blerb_id).destroy
    Blerb.destroy_old_blerbs
  end
end
