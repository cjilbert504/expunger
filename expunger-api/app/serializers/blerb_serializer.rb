class BlerbSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :created_at, :user
end
