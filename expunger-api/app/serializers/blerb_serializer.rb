class BlerbSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user
end
