class User < ApplicationRecord
  has_secure_password
  #password digest field needsto be encrypted 

  validates :email, presence: true, uniqueness: true
end
