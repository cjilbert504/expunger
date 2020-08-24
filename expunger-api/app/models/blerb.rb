class Blerb < ApplicationRecord
  belongs_to :user

  validates :content, length: { maximum: 120 }

  scope :not_outdated, -> { where("created_at >= ?", 20.seconds.ago) }
end
