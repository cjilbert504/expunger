class Blerb < ApplicationRecord
  belongs_to :user

  validates :content, length: { maximum: 120 }
  validates :content, presence: true

  scope :not_outdated, -> { where("created_at >= ?", 60.seconds.ago) }

end