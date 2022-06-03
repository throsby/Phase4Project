class Item < ApplicationRecord
    belongs_to :user
    has_many :item_tags
    has_many :tags, through: :item_tags

    has_one_attached :item_picture
end
