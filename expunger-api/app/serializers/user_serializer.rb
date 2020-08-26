class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :email, :authentication_token
  has_many :blerbs
end
