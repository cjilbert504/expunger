class Blerb < ApplicationRecord
  belongs_to :user

  validates :content, length: { maximum: 120 }

  scope :not_outdated, -> { where("created_at >= ?", 20.seconds.ago) }

  # private
  #   def self.destroy_old_blerbs
  #     self.where('created_at >= ?', 20.seconds.ago).destroy_all
  #   end

    # after_create do 
    #   BlerbsCleanupJob.perfom_later
    # end
end
