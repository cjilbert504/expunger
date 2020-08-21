3.times do
    User.create(username: Faker::Name.name, email: Faker::Internet.email, password: Faker::Internet.password )
end

3.times do
    user = User.first.blerbs.build(content: Faker::Quote.robin)
    user.save
end

3.times do
    user = User.second.blerbs.build(content: Faker::Quote.singular_siegler)
    user.save
end

3.times do
    user = User.last.blerbs.build(content: Faker::Quote.famous_last_words)
    user.save
end