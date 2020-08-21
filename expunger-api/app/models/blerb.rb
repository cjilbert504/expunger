class Blerb < ApplicationRecord
  belongs_to :user

  validates :content, length: { maximum: 120 }
end
