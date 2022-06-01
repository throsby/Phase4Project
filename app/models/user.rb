class User < ApplicationRecord
    has_many :items
    has_secure_password
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    
end
