3.times do
    user = User.new(username: Faker::Name.name, email: Faker::Internet.email, password: Faker::Internet.password )
    3.times do
        user.blerbs.build(content: Faker::Quote.famous_last_words)
    end
    user.save
end