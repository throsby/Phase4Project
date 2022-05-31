class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :stock, :price, :description, :user_id
end
