class Blerb < ApplicationRecord
  belongs_to :user

  validates :content, length: { maximum: 120 }

  after_create do 
    BlerbCleanupJob.perform_later(blerb_id)
  end
end
