class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :id
  has_many :blerbs
end
